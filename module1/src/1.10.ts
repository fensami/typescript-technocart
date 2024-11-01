{
    //union type
    // this is string literal type
    type FrontendDeveloper = "fakibaz" | "good"
    type FullstackDeveloper = "FrontendDevloper" | "ExpertDeveloper"
    type Developer = FrontendDeveloper | FullstackDeveloper
    const newDeveloper: FrontendDeveloper = "fakibaz"

    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        blood: "A+" | "B+" | "AB+"
    }
    const user1: User = {
        name: "asad",
        gender: "male",
        blood: "A+"
    }
}
{
    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    }
    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
const fullstackDeveloper : FullstackDeveloper  ={
    skills: ["hmtl", "css", "js"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
}
}