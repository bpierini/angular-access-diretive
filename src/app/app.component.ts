import { Component, VERSION } from "@angular/core";
import { Features } from "./features.enum";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public features = Features;

  public teste = {
    ui_topology: [
      "backup",
      "topology_details",
      "delete_topology",
      "history_monitoring",
      "sql_query",
      "view_logs",
      "security_policy",
      "infrastructure",
      "topology_shutdown",
      "origin_restriction",
      "realtime_monitoring",
      "topology_start"
    ]
  };
}
