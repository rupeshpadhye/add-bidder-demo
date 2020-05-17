import { AddItem } from './types';
export declare const getAdvertisers: (count: number, exclude: any, clientId: string) => Promise<string[]>;
export declare const getAdvertise: (advertiser: string, size: string) => Promise<AddItem>;
export declare const recordConversions: (uid: string, clientId: string) => Promise<boolean>;
