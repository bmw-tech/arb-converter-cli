import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";

export class HierarchicalJsonConverter {
  constructor(
    private directoryWithJsonFiles: string,
    private outputDir: string,
    private lastModified: string = new Date().toISOString()
  ) {}

  convertToArb() {
    const jsonFiles = fs
      .readdirSync(this.directoryWithJsonFiles)
      .filter(file => _.endsWith(file, ".json"));
    jsonFiles.map(file => {
      const filename = _.replace(file, ".json", ".arb");
      const jsonInString = fs.readFileSync(
        path.join(this.directoryWithJsonFiles, file),
        "utf8"
      );
      this.convertJsonToArb(jsonInString, filename);
    });
  }

  private convertJsonToArb(jsonInString: string, filename: string) {
    const jsonContent = JSON.parse(jsonInString);
    const resourceIds = Object.keys(jsonContent);
    let resources: Record<string, any> = {};
    resources["@@last_modified"] = this.lastModified;
    resources["@@author"] = "arb-converter-cli";
    resourceIds.forEach(id => {
      resources[id] = jsonContent[id];
    });
    const arbContent = JSON.stringify(resources);
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir);
    }
    fs.writeFileSync(path.join(this.outputDir, filename), arbContent);
  }
}
