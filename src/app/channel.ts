import { IInfo } from './iinfo';
import { Device } from './device';

export class Channel {
    id: number;
    name: string;
    description: string;
    alias: string;
    icon: string;
    devices: Device[];
}
