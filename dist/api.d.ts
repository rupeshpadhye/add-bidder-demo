import { Advertiser, AddItem } from './types';
export declare const getAdvertisers: (count: number, exclude: any) => Promise<Advertiser[]>;
export declare const getAdvertise: (advertiserInfo: Advertiser, size: string) => Promise<AddItem>;
export declare const recordConversions: (uid: string) => Promise<void>;
