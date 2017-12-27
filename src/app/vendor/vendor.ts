export class Vendor {
    id: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;

    about(): void{
        console.log('Code =', this.code
        + ', name = ', this.name
        + ', address = ', this.address
        + ', city = ', this.city
        + ', state = ', this.state
        + ', zip = ', this.zip
        + ', phone = ', this.phone
        + ', email = ', this.email);
    }

    constructor (id: string,
                code: string,
                name: string,
                address: string,
                city: string,
                state: string,
                zip: string,
                phone: string,
                email: string) {
                    this.id = id;
                    this.name = name;
                    this.address = address;
                    this.city = city;
                    this.zip = zip;
                    this.phone = phone;
                    this.email = email;
                    this.about();
                }
}