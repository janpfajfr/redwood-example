# Migration `20210214180636-migration`

This migration has been generated by Jan Pfajfr at 2/14/2021, 7:06:36 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210211183834-migration..20210214180636-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider        = "prisma-client-js"
@@ -30,4 +30,10 @@
   id    Int    @id @default(autoincrement())
   title String
   url   String
 }
+
+model Customer {
+  id    Int    @id @default(autoincrement())
+  name  String
+  email String
+}
```


