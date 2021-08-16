export namespace TwitchIt.API.Core.Enums {
  export enum SortBy {
    CreatedAt,
    LastBroadcast,
    Login,
  }

  /**
   * Enum representing sort keys available for /follows/channels/
   * NOTE: Might be the same as SortBy enum
   */
  export enum SortKey {
    CreatedAt,
    LastBroadcaster,
    Login,
  }
}
