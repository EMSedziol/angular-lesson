export class Product {
    id: string;
    vendorId: string;
    partNumber: string;
    name: string;
    price: string;
    unit: string;
    photopath: string;

    about(): void {
        console.log('vendorId = ', this.vendorId
        + ', partname =', this.partNumber
        + ', name = ', this.name
        + ', price = ', this.price
        + ', unit = ', this.unit
        + ', phototpath = ', this.photopath);
    }

    constructor ( id: string,
                vendorId: string,
                partNumber: string,
                name: string,
                price: string,
                unit: string,
                photopath: string) {
                    this.id = id;
                    this.vendorId = vendorId;
                    this.partNumber = partNumber;
                    this.name = name;
                    this.price = price;
                    this.unit = unit;
                    this.photopath = photopath;
                    this.about();
                }
}