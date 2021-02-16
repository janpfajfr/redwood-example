# Migration `20210211183834-migration`

This migration has been generated by Jan Pfajfr at 2/11/2021, 7:38:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201007180930-create-contact..20210211183834-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,14 +1,15 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
-  provider      = "prisma-client-js"
-  binaryTargets = "native"
+  provider        = "prisma-client-js"
+  binaryTargets   = "native"
+  previewFeatures = ["uncheckedScalarInputs"]
 }
 model Post {
   id        Int      @id @default(autoincrement())
@@ -23,4 +24,10 @@
   email     String
   message   String
   createdAt DateTime @default(now())
 }
+
+model Image {
+  id    Int    @id @default(autoincrement())
+  title String
+  url   String
+}
```

