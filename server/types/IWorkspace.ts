export interface IWorkspace {
  name: string
  owner: string
  collaborators: string[]
  categories: Array<{
    id: string
    name: string
  }>
}
