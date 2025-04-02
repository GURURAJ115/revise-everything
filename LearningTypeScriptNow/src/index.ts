interface User{
    id: String;
    name: string;
    age: number;
    email: string;
    password: string;
};
//Picking up the props that are only needed.
type UpdateProps = Pick<User, 'name'|'age'|'email'>
function updateUser(updatedProps: UpdateProps){
    //hit the db to update the user
    
}