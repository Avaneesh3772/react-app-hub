export  interface UserList {
    userId: number,
    id: number,
    title: string,
    body: boolean
  }

  export  interface JobType {
    id: string,
    title: string,
    type: string,
    description: boolean,
    location: string,
    salary: string,
    company?: {}
  }