// This could also be implemented as a collection of type data
// and then instead of exporting a list of experiences,
// you'll have a collection of individual JSON files, each one being an experience.

type Experience = {
    begin: Date;
    end: Date;
    org: string;
    description: string;
    title: string;
    impacts: string[];
    tags: string[];
}

const experiences: Experience[] = [
]

export { experiences };
