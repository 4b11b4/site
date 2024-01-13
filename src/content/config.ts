import { defineCollection, z } from 'astro:content';

// There are two collection types: `content` and `data`.
// The `data` type is useful for product data.
// You could load a bunch of products from a JSON, YAML,

// ...or even MDX with frontmatter if you also have content (like a blog post).
// ...but now that's just content.

const book = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.string(),
		published: z.coerce.date(),
		read: z.coerce.date(),

		// Optional
		modDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
		heroImage: z.string().optional(),
	}),
});

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
