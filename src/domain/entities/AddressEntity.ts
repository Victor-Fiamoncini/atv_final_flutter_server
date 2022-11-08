export class AddressEntity {
  constructor(
    private readonly street: string,
    private readonly neighborhood: string,
    private readonly city: string,
    private readonly state: string,
    private readonly country: string,
    private readonly postalCode: string
  ) {}
}
