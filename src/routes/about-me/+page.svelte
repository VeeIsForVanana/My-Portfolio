<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    const list_of_subjects = [
        "Data Science",
        "Software Engineering",
        "Database Systems Management",
        "Data Structures and Algorithms",
        "Discrete Mathematics",
        "Functional Programming",
        "Operating Systems Design",        
        "Programming Languages",
        "Computer Architecture Design",
        "Computer Networks",
        "Computer Security",
        "Automata Theory",
        "<span class='italic'>and more...</span>"
    ]

    const list_of_topics = [
        "Geology",
        "Geography",
        "Storytelling",
        "History",
        "Linguistics",
        "Economics",
        "Biology",
        "Mythology",
        "Religions",
        "Law",
        "Military Science",
        "Game Design",
        "Politics and Government",
        "and Medicine",
    ]

</script>

<div class="container h-full flex justify-left items-center mx-20 max-w-screen-lg prose dark:prose-invert text-justify">
    <div class="shadow-md w-max p-8 bg-surface-900/10 rounded-lg mt-16 mb-16">
        <h1>Victor Edwin E Reyes</h1>

        <p>One of the things I personally believe is that if I can describe myself with a single word/sentence/paragraph, then that either means I'm selling myself short, or that my life is woefully boring.</p>
        <p>Unfortunately for me writing this page, I don't intend to do the former, nor do I think my life is the latter. So let's start with what I am.</p>

        <hr>

        <h3>I am a Student</h3>

        <p>As of time of writing, I am a student of the <span>University of the Philippines Diliman</span> under the BS Computer Science program. That, right now, is my primary role. Of course, if that was all you needed, you would've stopped at the homepage.</p>

        <h4>Throughout my stay, I have taken classes on the following:</h4>
        
        <div class="two-column-list m-6 text-warning-400">
            {#each list_of_subjects as subject}
                <div>{@html subject}</div>
            {/each}
        </div>

        <p>Effectively, the curriculum at my institution has given me an understanding of <span class="text-primary-600">how computers are built from the ground up</span>, <span class="text-secondary-600">what exactly it means for something to compute</span>, <span class="text-tertiary-600">and how to tell these computers what to do in an elegant, efficient, and <span class="underline">maintainable</span> way</span>, among other equally important things.</p>

        <p>Now, this is quite a lot. It is definitely much more than what other institutions teach, and much more than is needed to make a developer or a programmer. I've heard many a fellow student ask themselves why we even need all of this. I even asked myself this as I stumbled through our infamous low-level Systems Series and our woefully abstract Discrete Math subjects.</p>

        <p>Now; however, three years into the program, I understand why we're being trained this way. It is all, simply enough, in the name. Our course does not raise developers or programmers. I did not go through this course just so at the end I could say "I am a coder". The end goal of this course, and for me in this curriculum, is for me to be able to say:</p>

        <h3 class="text-tertiary-700 drop-shadow-md">I am a Computer Scientist</h3>

        <hr>

        <h3>I am an Explorer</h3>

        <p>I don't really confine my learning to a classroom. Of course, there's the obvious school of life schtick - life always teaches new things about you and the world around you. In addition to this, though, I've always had a habit of digging myself into the strangest and most interesting rabbitholes beyond the context of my academic interests. </p>

        <!--Insert some trivia switcher thing here with interesting fun facts or something-->

        
        <p>In the past, I've explored such fields as <span class="text-primary-500">{#each list_of_topics as topic} {topic}{list_of_topics.findIndex((elem) => elem == topic) != list_of_topics.length ? ', ' : ''} {/each}</span> among many and varied others. You will, of course, ask why. My answer is that I just think they're all interesting. At the same time, these topics have been of use to me or have influenced the way I think.</p>

        <p>For example, my exploration of geography has given me an appreciation for how different places raise different people, with different worldviews and different skills, all equally valuable, profound, and useful. Meanwhile, my forays into linguistics and dabbling in foreign languages has given me an appreciation of the languages I already speak, while presenting me with a good jumping-off point in case I decide to actually learn a new language.</p>

        <p>A lot of these 'extracurriculars' were actually born out of my hobbies. I've studied Game Design because I like trying to develop games as a side hobby. I've studied geography and history in part because they are interesting in and of themselves, but also because I build historical worlds as a hobby (referred to as "worldbuilding" in some circles). In fact, a lot of my extra-academic fields of interests were born because I wanted to imbue the worlds I made with some sense of realism and groundedness in reality.</p>

        <p>Looking closer at my interests, I guess one common theme is the idea that I like collecting <span class="text-primary-500">stories</span>. In fact, even in my academics one of my favorite parts of learning is understanding how all the various parts of the systems and structures I learn come together. There is, of course, the mechanistic pleasure in watching everything come together as a puzzle. But I've always maintained a keen interest in watching the patterns, and sometimes, the stories that they tell. Whether it be in observing the way design decisions in operating systems have evolved over time and left their mark as strange artifacts and curiosities on modern systems, or by understanding the delicate interplay and balance within complex systems like political systems, human infrastructure, and living ecologies.</p>

        <p>Of course, all of these hobbies, all of this knowledge, does not (and should not) exist simply for my own indulgence. In all my forays, all my expeditions into the furthest corners of human knowledge, there is always the knowledge that I will return more than I was when I left, to help others become more than they are, with the stories and knowledge I bear. In other words,</p>

        <h3 class = "text-tertiary-700 drop-shadow-md">I am a Storyteller</h3>

        <hr>
    </div> 
</div>

<style>
    .two-column-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }
</style>