
# GitHub Issue Search  
  
## Overview  
Explore and visualize GitHub issues through a simple search bar. The search bar will take a GitHub repository URL and return all issues from that repository.  
  
  
## Instructions  
  
First and foremost, this project is meant to see how well you understand Nextjs / React / Typescript.   
- Before you start read all of the tasks in this assignment and fill out the [planning section](#planning) below. 
- Read through the project setup section.  
- Please use [Shadcn](https://ui.shadcn.com/docs/components/accordion) UI Library for all components- install whatever you need.  
- Use [Tailwind CSS](https://tailwindcss.com/docs) for styling.  
- Use the [Github API](https://docs.github.com/en/rest/reference) as your source of data.  
  
  
  
### Tasks  
  
- Before you start fill out the [planning](#planning) section below.   
- Create a search page with a search bar. Users should be able to paste a GitHub repo URL here.  
- Create a results page that displays **all** (open, closed, pull requests) issues from the search query.  
- Indicate which issues are closed or pull requests using [heroicons](https://github.com/tailwindlabs/heroicons).   
- Implement filtering by open, closed, or pull requests on the results page.  
- Add loading, empty, and error states.  
- Once complete fill out the [Looking Back](#looking-back) section below and send us a link to your repo.  
  
  
It is an MVP (minimum viable product) - done is better than perfect.  
  
## Project Setup  
  
- Create a repo  
- Put this README.md in the project  
  
Run the following commands  
  
```bash  
npx create-next-app@latest  
```  
Select yes to all options **except** to customize the default import alias  
```bash  
npm install @heroicons/react  
```  
To run the development server:  
  
```bash  
npm run dev  
```  
  
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
  
  
  
# QnA  
  
### Planning  
  
> What do you think are the greatest areas of risk in completing the project?  
  - Slight risk in time needed for learning the frameworks, tools and the API usage needed to complete the task
  - Might not be able to incorporate all the possible performance enhancements, edge cases and testing in the time given
  
> What changes/additions would you make to the design?  
  I think the design fits the basic use case of browsing through a open github repo, but some more basic features like showing details about the repo, displaying total issue count or issue summary. Adding pagination or a similar performance strategy would help ensure this app does not break if a repo returns a really big list of issues, given its current state it might slow down or crash. 
  
> List a two or three features that you would consider implementing in the future that would add significant value to the project.  
  - Authentication(Currently users can only access public repos, authentication would help us better understand and limit the api usage, let users view repos that they have access to.)
  - Pagination
  - Features around better usability like remembering users search history or bookmarking certain issues or repos.
  
---  
  
### Looking Back  
  
> Describe the major design/build decisions and why you made them.  
  - I've kept most of the components modular, which makes further development and testing/debuggin easier in my opinion.
  - The frameworks and tools listed to use were very helpful in building this a bit faster, especially tailwinds
  
  
> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").  
  - ~1 Hr: Understanding the project and requirements,Installing the tools and frameworks, going through their documentation and usage, setting the stage for actual development.
  - ~2.5 Hr: Creating components, wiring things up and making it functional.
  - .5 Hr: Debugging/Testing, Adding code to make it more performant as possible.

> If you could go back and give yourself advice at the beginning of the project, what would it be?  
   Cannot think of any right now. 
  
> Did you learn anything new?  
  Learnt how NextJS has evolved since i last worked with it. All the frameworks were easy to install and work with and was a good refresher doing this project.
  
> Do you feel that this assignment allowed you to showcase your abilities effectively?  
  Yes, it did. 
  
> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?
  I think the exercise was good medium to showcase the basic skills that we use for most part of our jobs. Few skills that i can think of that i've accumalted over my years doing this; i had the chance to work on some really complex web animations, native mobile apps, setting up code standards and tools to ensure them, setting up CI/CD pipelines. 