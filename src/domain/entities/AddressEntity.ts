export class AddressEntity {
  constructor(
    readonly street: string,
    readonly neighborhood: string,
    readonly city: string,
    readonly state: string,
    readonly country: string,
    readonly postalCode: string
  ) {}
}
