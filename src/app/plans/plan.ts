export interface Plan {
    id: number;
    planName: string;
    planPrice: string;
    userId: number;
    phoneNumber: number;
    devices: string;
}

export interface PlanDTO {
    planName: string;
    planPrice: string;
    userId: number;
    phoneNumber: number;
    devices: string;
}