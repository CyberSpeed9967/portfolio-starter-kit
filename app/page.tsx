import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Preston Maust I go to  SCTC Somerset County Technical Center and im in the Computer Networking program. My sending school is Salisbury Elk-Lick Highschool.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
