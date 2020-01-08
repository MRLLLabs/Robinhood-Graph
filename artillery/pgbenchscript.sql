\set tickerid random(1, 100000 * :scale)
BEGIN;
SELECT * FROM prices_1d WHERE id = :tickerid;
END;