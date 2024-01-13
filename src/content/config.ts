import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),

		// Optional
		modDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
		heroImage: z.string().optional(),
	}),
});

const project = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),

		pubDate: z.coerce.date(),
		modDate: z.coerce.date(),

		// Optional
		tags: z.array(z.string()).optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog, project };
