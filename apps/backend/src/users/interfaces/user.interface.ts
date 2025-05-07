import { UUID } from 'crypto';

// interfaces/authenticated-user.interface.ts
export interface User {
  id: UUID;
  email: string;
  password: string;
  name: string;
  surname: string;
}
