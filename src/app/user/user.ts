export class User {
    id: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    reviewer: string;
    admin: string;

    about(): void {
        console.log('Name = ', this.userName
            + ', passowrd = ', this.password
            + ', firstName = ', this.firstName
            + ', lastName = ', this.lastName
            + ', phone = ', this.phone
            + ', email = ', this.email
            + ', reviewer = ', this.reviewer
            + ', admin = ',  this.admin);
    }

    constructor (id: string,
                userName: string,
                password: string,
                firstName: string,
                lastName: string,
                phone: string,
                email: string,
                reviewer: string,
                admin: string) {
                    this.id = id;
                    this.userName = userName;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.phone = phone;
                    this.email = email;
                    this.reviewer = reviewer;
                    this.admin = admin;
                    this.about();
                }

}