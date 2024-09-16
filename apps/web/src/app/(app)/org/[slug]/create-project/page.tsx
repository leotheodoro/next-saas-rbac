import { Header } from '@/components/header'

import { ProjectForm } from './project-form'

export default function CreateProjectPage() {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px]">
        <h1 className="text-2xl font-bold">Create project</h1>
        <ProjectForm />
      </main>
    </div>
  )
}
