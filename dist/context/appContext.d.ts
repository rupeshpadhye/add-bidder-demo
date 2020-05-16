/// <reference types="react" />
import { Advertiser } from '../types';
interface ContextType {
    registerAdd?: (id: string) => void;
    unregisterAdd?: (id: string) => void;
    advertisers: Array<Advertiser>;
}
declare const AppContext: import("react").Context<ContextType>;
export default AppContext;
