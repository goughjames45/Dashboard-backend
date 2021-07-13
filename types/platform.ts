export enum PlatformType {
    MOBILE = 'mobile',
    TABLET = 'tablet',
    DESKTOP = 'desktop',
}

export interface Platform {
    platformType: PlatformType,
    visits: number,
}