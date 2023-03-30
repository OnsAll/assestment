export interface Setting {
  description: string;
  type: string;
  default_value: string;
}
export interface Corrector {
  id: number;
  name: string;
  role: string;
  group: string;
}
