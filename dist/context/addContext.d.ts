/// <reference types="react" />
import { AdvertiserAddMapping } from '../types';
interface ContextType {
    registerAdd: (id: string) => void;
    addConversion: (id: string) => void;
    advertisers: Array<AdvertiserAddMapping>;
}
declare const AppContext: import("react").Context<ContextType>;
export default AppContext;
