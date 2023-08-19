local function pack(E: number, M: number)
	local packedValue = E * 2 ^ 11 + M

	-- Split the packed value into two 8-bit chunks
	local highByte = math.floor(packedValue / 2 ^ 8)
	local lowByte = packedValue % 2 ^ 8

	-- Convert the 8-bit chunks into characters and concatenate them
	return string.char(highByte) .. string.char(lowByte)
end

local function unpack(y: string)
	-- Convert the characters back into 8-bit integers
	local highByte = string.byte(y, 1)
	local lowByte = string.byte(y, 2)

	-- Reconstruct the 16-bit packed value
	local packedValue = highByte * 2 ^ 8 + lowByte

	-- Extract E and M
	local E = math.floor(packedValue / 2 ^ 11)
	local M = packedValue % 2 ^ 11

	return E, M
end

local function decompose(x: number)
	local E, M

	if x == 0 then
		E = 0
		M = 0
	else
		local b = math.floor(math.log(x, 2))
		local a = x * 2 ^ -b
		local f

		-- Check for subnormal numbers
		if b < -31 then
			E = 1
			f = 0
		else
			E = b + 32
			f = 1
		end

		-- Calculate M
		M = math.floor((a - f) * 2 ^ 11)
	end

	return E, M
end

local function recompose(E: number, M: number)
	local f = if E == 0 then 0 else 1
	local x = (f + M / 2 ^ 11) * 2 ^ (E - 32)
	return x
end

local function ser(x: number)
	local x = x % 1

	local e, m

	if x == 0 then
		e = 0
		m = 0
	else
		local b = math.floor(math.log(x, 2))
		local a = x * 2 ^ -b
		local f

		-- Check for subnormal numbers
		if b < -31 then
			e = 1
			f = 0
		else
			e = b + 32
			f = 1
		end

		-- Calculate M
		m = math.floor((a - f) * 2 ^ 11)
	end

	local packedValue = e * 2 ^ 11 + m

	-- Split the packed value into two 8-bit chunks
	local highByte = math.floor(packedValue / 2 ^ 8)
	local lowByte = packedValue % 2 ^ 8

	-- Convert the 8-bit chunks into characters and concatenate them
	return string.char(highByte) .. string.char(lowByte)
end

local function des(y: string)
	-- Convert the characters back into 8-bit integers
	local highByte = string.byte(y, 1)
	local lowByte = string.byte(y, 2)

	-- Reconstruct the 16-bit packed value
	local packedValue = highByte * 2 ^ 8 + lowByte

	-- Extract E and M
	local e = math.floor(packedValue / 2 ^ 11)
	local m = packedValue % 2 ^ 11

	local f = if e == 0 then 0 else 1
	return (f + m / 2 ^ 11) * 2 ^ (e - 32)
end

local function ser2(x)
	local d = x % 1
	if d == 0 then return "\0\0" end

	local b = math.floor(math.log(d, 2))
	local e = if b == -32 then 1 else b + 32
	local m = math.floor(2048 * (d * 2 ^ -b - if e == 1 then 0 else 1))

	print(b, e, m)

	local p = e * 2048 + m
	return string.char(math.floor(p / 256), p % 256)
end

local function des2(y)
    local highByte, lowByte = string.byte(y, 1, 2)
    local e = math.floor((highByte * 256 + lowByte) / 2048)
    local m = (highByte * 256 + lowByte) % 2048
	return 2 ^ (e - 32) * (m / 2048 + if e == 0 then 0 else 1)
end

print(des2(ser2(0.0000000029244075276)))

local tau = 2 * math.pi

--- Used to serialize angles in the range [0, 2pi) with 2 bytes
local serAngle = function(x: number): string
	local decimal = (x / tau) % 1
	if decimal == 0 then
		return '\0\0'
	end
	local rawExponent = math.floor(math.log(decimal, 2))
	local exponent = if rawExponent == -32 then 1 else rawExponent + 32
	local float16 = exponent * 2048 + math.floor(2048 * (decimal * 2 ^ -rawExponent - if exponent == 1 then 0 else 1))
	return string.char(math.floor(float16 / 256), float16 % 256)
end

--- Used to deserialize angles in the range [0, 2pi) with 2 bytes
local desAngle = function(y: string): number
	local highByte, lowByte = string.byte(y, 1, 2)
	local e = math.floor((highByte * 256 + lowByte) / 2048)
	local m = (highByte * 256 + lowByte) % 2048
	return tau * 2 ^ (e - 32) * (m / 2048 + if e == 0 then 0 else 1)
end

print(tau * 0.246482, desAngle(serAngle(tau  * 0.246482)))

print(string.byte("hello", -5, -1))