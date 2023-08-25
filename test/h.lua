local a = function(y: string)
	local posBytes = 1
	local maxSize = 3 * posBytes + 6

	local nullSplit = string.split(y, '\0 ')
	local split = {}
	for _, str in nullSplit do
		local length = #str
		if length > 0 then
			for i = 1, length, maxSize do
				local j = math.min(length, i + maxSize - 1)
				local sub = string.sub(str, i, j)
				table.insert(split, sub)
			end
		else
			table.insert(split, '')
		end
	end
end

a('ppprrrrrrpppr\0 \0 r\0 pppr\0 prrrrrr\0 ppprrrrrrppprrrrrrpr\0 pppr\0 ')