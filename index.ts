/**
 * This class keeps track of the version number
 * of your application.
 */
class Status {
  /**
   * This property ...
   */
  public version: number = 0;

  /**
   * This method prints out the current version number
   */
  public showVersion() {
    console.log('version:', this.version);
  }

  /**
   * This method increases the version number with 1
   *
   * @returns the current version number
   */
  public increaseVersion() {
    this.version += 1;
    return this.version;
  }

  /**
   * change the version number to the provided number
   *
   * @param version the number that needs to be used as a version number
   * @returns the current version number
   */
  public changeVersion(version: number) {
    this.version = version;
    return this.version;
  }
}
