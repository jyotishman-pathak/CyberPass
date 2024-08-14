import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const workspaces = pgTable("workspaces", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: 'string',
  }),
  workspacesOwner: uuid("workspace_owner").notNull(),
  title: text('title').notNull(),
  iconId: text('icon_id').notNull(),
  data: text('data'),
  inTrash: text('in_trash'),
  logo: text('logo'),
  bannerUrl: text('banner_url'),
});

// Export the table so that it's detected by Drizzle ORM
export const tables = { workspaces };
