export interface ITenant {
  tenant_id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export class Tenant {
  constructor(tenant: ITenant) {

  }
}
