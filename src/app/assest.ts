import { IInfo } from './iinfo';
import { Channel } from './channel';

export class Assest {
    id: number;
    name: string;
    description: string;
    alias: string;
    icon: string;
    channels: Channel[];
}
