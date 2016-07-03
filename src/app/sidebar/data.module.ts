export class Root {
    id: number;
    name: string;
    description: string;
    groups: Group[];
}

export class Group {
    id: number;
    name: string;
    description: string;
    assets: Asset[];
}

export class Asset {
    id: number;
    name: string;
    description: string;
    assetType: AssetType;
    channels: Channel[];
}

export class AssetType {
    id: number;
    name: string;
    description: string;
    alias: string;
    icon: string;
}

export class Channel {
    id: number;
    name: string;
    devices: Device[];
}

export class Device {
    id: number;
    name: string;
    description: string;
    alias: string;
    icon: string;
    tags: Tag[];
}

export class Tag {
    id: number;
    type: string;
    icon: string;
    value: string;
    dataType: string;
}