/* tslint:disable:member-ordering */
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[isAllow]"
})
export class IsAllowDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  private userFeature = [
    "list_user_roles",
    "generate_positive_validation_token",
    "list_pipelines",
    "crud_features",
    "list_pipelines_admin",
    "crud_template_services",
    "crud_template_actions",
    "list_features",
    "list_template_product",
    "news_editor",
    "_list_customers",
    "crud_template_product",
    "internal_message",
    "topology_launch",
    "tcm_report",
    "list_template",
    "crud_template",
    "list_template_services",
    "show_contract",
    "validate_token_positive_validation",
    "show_nps",
    "list_roles",
    "developer",
    "adm_show_contract",
    "crud_user_roles",
    "release_port_database_dedicaded",
    "crud_roles_features",
    "create_database_user_dedicaded",
    "topologies_exclusion_admin",
    "insights_reader",
    "list_template_actions",
    "smarterp_users"
  ];

  @Input() set isAllow(checkAccess: Array<any>) {
    let hasAccess = false;

    if (Array.isArray(checkAccess[0])) {
      if (checkAccess[1]) {
        let features = checkAccess[1].ui_topology;
        if (features) {
          checkAccess[0].forEach((rule: any) => {
            hasAccess =
              hasAccess ||
              (features.findIndex(feature => feature === rule) != -1
                ? true
                : false);
          });
        }
      }
    } else {
      let features = this.userFeature;
      checkAccess.forEach((rule: any) => {
        hasAccess =
          hasAccess ||
          (features.findIndex(feature => feature === rule) != -1
            ? true
            : false);
      });
    }

    if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
