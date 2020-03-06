-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "b_table" (
    "unnamed" int   NOT NULL,
    "brand" varchar   NOT NULL,
    "product" varchar   NOT NULL,
    "product_Type" varchar   NOT NULL,
    "price" float   NOT NULL,
    "rating" float   NOT NULL,
    "details" varchar   NOT NULL,
    "ingredients" varchar   NOT NULL,
    "uRL" varchar   NOT NULL,
    "store" varchar   NOT NULL
);




select * from b_table
where product_type = 'blush'
order by rating desc
limit 10
