SELECT
binid
,shelfid
,name
,price
FROM shelfie
WHERE shelfid = ${shelfid}
ORDER BY binid;