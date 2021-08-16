// NOTE: Not sure if this is needed in TS
//   --: Might remove this class

export namespace TwitchIt.API.Core.Enums {
  export class StringEnum {
    private _value

    public get value(): string {
      return this._value
    }

    public ToString() {
      return this.value
    }
  }
}
