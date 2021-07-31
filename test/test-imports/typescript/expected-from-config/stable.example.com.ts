// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema CronTab
 */
export class CronTab extends ApiObject {
  /**
   * Returns the apiVersion and kind for "CronTab"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'stable.example.com/v1',
    kind: 'CronTab',
  }

  /**
   * Renders a Kubernetes manifest for "CronTab".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: CronTabProps = {}): any {
    return {
      ...CronTab.GVK,
      ...toJson_CronTabProps(props),
    };
  }

  /**
   * Defines a "CronTab" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: CronTabProps = {}) {
    super(scope, id, CronTab.manifest(props));
  }
}

/**
 * @schema CronTab
 */
export interface CronTabProps {
  /**
   * @schema CronTab#spec
   */
  readonly spec?: CronTabSpec;

  /**
   * @schema CronTab#metadata
   */
  readonly metadata?: ApiObjectMetadata;

}

/**
 * Converts an object of type 'CronTabProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CronTabProps(obj: CronTabProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'spec': toJson_CronTabSpec(obj.spec),
    'metadata': obj.metadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CronTabSpec
 */
export interface CronTabSpec {
  /**
   * @schema CronTabSpec#cronSpec
   */
  readonly cronSpec?: string;

  /**
   * @schema CronTabSpec#image
   */
  readonly image?: string;

  /**
   * @schema CronTabSpec#replicas
   */
  readonly replicas?: number;

}

/**
 * Converts an object of type 'CronTabSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CronTabSpec(obj: CronTabSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cronSpec': obj.cronSpec,
    'image': obj.image,
    'replicas': obj.replicas,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

