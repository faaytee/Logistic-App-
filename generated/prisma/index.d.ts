
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Deliveries
 * 
 */
export type Deliveries = $Result.DefaultSelection<Prisma.$DeliveriesPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drivers
 * const drivers = await prisma.driver.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Drivers
   * const drivers = await prisma.driver.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveries`: Exposes CRUD operations for the **Deliveries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.deliveries.findMany()
    * ```
    */
  get deliveries(): Prisma.DeliveriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Driver: 'Driver',
    Deliveries: 'Deliveries',
    Route: 'Route'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "driver" | "deliveries" | "route"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Deliveries: {
        payload: Prisma.$DeliveriesPayload<ExtArgs>
        fields: Prisma.DeliveriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          findFirst: {
            args: Prisma.DeliveriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          findMany: {
            args: Prisma.DeliveriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          create: {
            args: Prisma.DeliveriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          createMany: {
            args: Prisma.DeliveriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeliveriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          update: {
            args: Prisma.DeliveriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          deleteMany: {
            args: Prisma.DeliveriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeliveriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          aggregate: {
            args: Prisma.DeliveriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveries>
          }
          groupBy: {
            args: Prisma.DeliveriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveriesCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    driver?: DriverOmit
    deliveries?: DeliveriesOmit
    route?: RouteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    deliveries: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | DriverCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    deliveries: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | RouteCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    licenseNumber: string | null
    vechile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    licenseNumber: string | null
    vechile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    licenseNumber: number
    vechile: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    licenseNumber?: true
    vechile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    licenseNumber?: true
    vechile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    licenseNumber?: true
    vechile?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    fullName: string
    email: string
    licenseNumber: string
    vechile: string | null
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    licenseNumber?: boolean
    vechile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveries?: boolean | Driver$deliveriesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type DriverSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    licenseNumber?: boolean
    vechile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "licenseNumber" | "vechile" | "createdAt" | "updatedAt", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | Driver$deliveriesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      deliveries: Prisma.$DeliveriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      licenseNumber: string
      vechile: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends Driver$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Driver$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */ 
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'Int'>
    readonly fullName: FieldRef<"Driver", 'String'>
    readonly email: FieldRef<"Driver", 'String'>
    readonly licenseNumber: FieldRef<"Driver", 'String'>
    readonly vechile: FieldRef<"Driver", 'String'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.deliveries
   */
  export type Driver$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    cursor?: DeliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Deliveries
   */

  export type AggregateDeliveries = {
    _count: DeliveriesCountAggregateOutputType | null
    _avg: DeliveriesAvgAggregateOutputType | null
    _sum: DeliveriesSumAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  export type DeliveriesAvgAggregateOutputType = {
    id: number | null
    driverId: number | null
    routeId: number | null
  }

  export type DeliveriesSumAggregateOutputType = {
    id: number | null
    driverId: number | null
    routeId: number | null
  }

  export type DeliveriesMinAggregateOutputType = {
    id: number | null
    deliveryId: string | null
    status: string | null
    driverId: number | null
    routeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveriesMaxAggregateOutputType = {
    id: number | null
    deliveryId: string | null
    status: string | null
    driverId: number | null
    routeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveriesCountAggregateOutputType = {
    id: number
    deliveryId: number
    status: number
    driverId: number
    routeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeliveriesAvgAggregateInputType = {
    id?: true
    driverId?: true
    routeId?: true
  }

  export type DeliveriesSumAggregateInputType = {
    id?: true
    driverId?: true
    routeId?: true
  }

  export type DeliveriesMinAggregateInputType = {
    id?: true
    deliveryId?: true
    status?: true
    driverId?: true
    routeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveriesMaxAggregateInputType = {
    id?: true
    deliveryId?: true
    status?: true
    driverId?: true
    routeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveriesCountAggregateInputType = {
    id?: true
    deliveryId?: true
    status?: true
    driverId?: true
    routeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeliveriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to aggregate.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveriesMaxAggregateInputType
  }

  export type GetDeliveriesAggregateType<T extends DeliveriesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveries[P]>
      : GetScalarType<T[P], AggregateDeliveries[P]>
  }




  export type DeliveriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithAggregationInput | DeliveriesOrderByWithAggregationInput[]
    by: DeliveriesScalarFieldEnum[] | DeliveriesScalarFieldEnum
    having?: DeliveriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveriesCountAggregateInputType | true
    _avg?: DeliveriesAvgAggregateInputType
    _sum?: DeliveriesSumAggregateInputType
    _min?: DeliveriesMinAggregateInputType
    _max?: DeliveriesMaxAggregateInputType
  }

  export type DeliveriesGroupByOutputType = {
    id: number
    deliveryId: string
    status: string
    driverId: number | null
    routeId: number
    createdAt: Date
    updatedAt: Date
    _count: DeliveriesCountAggregateOutputType | null
    _avg: DeliveriesAvgAggregateOutputType | null
    _sum: DeliveriesSumAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  type GetDeliveriesGroupByPayload<T extends DeliveriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
        }
      >
    >


  export type DeliveriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deliveryId?: boolean
    status?: boolean
    driverId?: boolean
    routeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | Deliveries$driverArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>



  export type DeliveriesSelectScalar = {
    id?: boolean
    deliveryId?: boolean
    status?: boolean
    driverId?: boolean
    routeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeliveriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deliveryId" | "status" | "driverId" | "routeId" | "createdAt" | "updatedAt", ExtArgs["result"]["deliveries"]>
  export type DeliveriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | Deliveries$driverArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $DeliveriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deliveries"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs> | null
      route: Prisma.$RoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deliveryId: string
      status: string
      driverId: number | null
      routeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deliveries"]>
    composites: {}
  }

  type DeliveriesGetPayload<S extends boolean | null | undefined | DeliveriesDefaultArgs> = $Result.GetResult<Prisma.$DeliveriesPayload, S>

  type DeliveriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveriesCountAggregateInputType | true
    }

  export interface DeliveriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deliveries'], meta: { name: 'Deliveries' } }
    /**
     * Find zero or one Deliveries that matches the filter.
     * @param {DeliveriesFindUniqueArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveriesFindUniqueArgs>(args: SelectSubset<T, DeliveriesFindUniqueArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliveries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveriesFindUniqueOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveriesFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindFirstArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveriesFindFirstArgs>(args?: SelectSubset<T, DeliveriesFindFirstArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindFirstOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveriesFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.deliveries.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.deliveries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveriesFindManyArgs>(args?: SelectSubset<T, DeliveriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deliveries.
     * @param {DeliveriesCreateArgs} args - Arguments to create a Deliveries.
     * @example
     * // Create one Deliveries
     * const Deliveries = await prisma.deliveries.create({
     *   data: {
     *     // ... data to create a Deliveries
     *   }
     * })
     * 
     */
    create<T extends DeliveriesCreateArgs>(args: SelectSubset<T, DeliveriesCreateArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveriesCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveriesCreateManyArgs>(args?: SelectSubset<T, DeliveriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deliveries.
     * @param {DeliveriesDeleteArgs} args - Arguments to delete one Deliveries.
     * @example
     * // Delete one Deliveries
     * const Deliveries = await prisma.deliveries.delete({
     *   where: {
     *     // ... filter to delete one Deliveries
     *   }
     * })
     * 
     */
    delete<T extends DeliveriesDeleteArgs>(args: SelectSubset<T, DeliveriesDeleteArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliveries.
     * @param {DeliveriesUpdateArgs} args - Arguments to update one Deliveries.
     * @example
     * // Update one Deliveries
     * const deliveries = await prisma.deliveries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveriesUpdateArgs>(args: SelectSubset<T, DeliveriesUpdateArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveriesDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.deliveries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveriesDeleteManyArgs>(args?: SelectSubset<T, DeliveriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveriesUpdateManyArgs>(args: SelectSubset<T, DeliveriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deliveries.
     * @param {DeliveriesUpsertArgs} args - Arguments to update or create a Deliveries.
     * @example
     * // Update or create a Deliveries
     * const deliveries = await prisma.deliveries.upsert({
     *   create: {
     *     // ... data to create a Deliveries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliveries we want to update
     *   }
     * })
     */
    upsert<T extends DeliveriesUpsertArgs>(args: SelectSubset<T, DeliveriesUpsertArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.deliveries.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveriesCountArgs>(
      args?: Subset<T, DeliveriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveriesAggregateArgs>(args: Subset<T, DeliveriesAggregateArgs>): Prisma.PrismaPromise<GetDeliveriesAggregateType<T>>

    /**
     * Group by Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveriesGroupByArgs['orderBy'] }
        : { orderBy?: DeliveriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deliveries model
   */
  readonly fields: DeliveriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deliveries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends Deliveries$driverArgs<ExtArgs> = {}>(args?: Subset<T, Deliveries$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deliveries model
   */ 
  interface DeliveriesFieldRefs {
    readonly id: FieldRef<"Deliveries", 'Int'>
    readonly deliveryId: FieldRef<"Deliveries", 'String'>
    readonly status: FieldRef<"Deliveries", 'String'>
    readonly driverId: FieldRef<"Deliveries", 'Int'>
    readonly routeId: FieldRef<"Deliveries", 'Int'>
    readonly createdAt: FieldRef<"Deliveries", 'DateTime'>
    readonly updatedAt: FieldRef<"Deliveries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deliveries findUnique
   */
  export type DeliveriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries findUniqueOrThrow
   */
  export type DeliveriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries findFirst
   */
  export type DeliveriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries findFirstOrThrow
   */
  export type DeliveriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries findMany
   */
  export type DeliveriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries create
   */
  export type DeliveriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Deliveries.
     */
    data: XOR<DeliveriesCreateInput, DeliveriesUncheckedCreateInput>
  }

  /**
   * Deliveries createMany
   */
  export type DeliveriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveriesCreateManyInput | DeliveriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deliveries update
   */
  export type DeliveriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Deliveries.
     */
    data: XOR<DeliveriesUpdateInput, DeliveriesUncheckedUpdateInput>
    /**
     * Choose, which Deliveries to update.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries updateMany
   */
  export type DeliveriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Deliveries upsert
   */
  export type DeliveriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Deliveries to update in case it exists.
     */
    where: DeliveriesWhereUniqueInput
    /**
     * In case the Deliveries found by the `where` argument doesn't exist, create a new Deliveries with this data.
     */
    create: XOR<DeliveriesCreateInput, DeliveriesUncheckedCreateInput>
    /**
     * In case the Deliveries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveriesUpdateInput, DeliveriesUncheckedUpdateInput>
  }

  /**
   * Deliveries delete
   */
  export type DeliveriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter which Deliveries to delete.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries deleteMany
   */
  export type DeliveriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Deliveries.driver
   */
  export type Deliveries$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Deliveries without action
   */
  export type DeliveriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    id: number | null
    distance: number | null
  }

  export type RouteSumAggregateOutputType = {
    id: number | null
    distance: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: number | null
    origin: string | null
    destination: string | null
    distance: number | null
    estimatedTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: number | null
    origin: string | null
    destination: string | null
    distance: number | null
    estimatedTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    origin: number
    destination: number
    distance: number
    estimatedTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    id?: true
    distance?: true
  }

  export type RouteSumAggregateInputType = {
    id?: true
    distance?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    origin?: true
    destination?: true
    distance?: true
    estimatedTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    origin?: true
    destination?: true
    distance?: true
    estimatedTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    origin?: true
    destination?: true
    distance?: true
    estimatedTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: number
    origin: string
    destination: string
    distance: number | null
    estimatedTime: string | null
    createdAt: Date
    updatedAt: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origin?: boolean
    destination?: boolean
    distance?: boolean
    estimatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveries?: boolean | Route$deliveriesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>



  export type RouteSelectScalar = {
    id?: boolean
    origin?: boolean
    destination?: boolean
    distance?: boolean
    estimatedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "origin" | "destination" | "distance" | "estimatedTime" | "createdAt" | "updatedAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | Route$deliveriesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      deliveries: Prisma.$DeliveriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      origin: string
      destination: string
      distance: number | null
      estimatedTime: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends Route$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Route$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */ 
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'Int'>
    readonly origin: FieldRef<"Route", 'String'>
    readonly destination: FieldRef<"Route", 'String'>
    readonly distance: FieldRef<"Route", 'Float'>
    readonly estimatedTime: FieldRef<"Route", 'String'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
    readonly updatedAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.deliveries
   */
  export type Route$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    cursor?: DeliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DriverScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    licenseNumber: 'licenseNumber',
    vechile: 'vechile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const DeliveriesScalarFieldEnum: {
    id: 'id',
    deliveryId: 'deliveryId',
    status: 'status',
    driverId: 'driverId',
    routeId: 'routeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeliveriesScalarFieldEnum = (typeof DeliveriesScalarFieldEnum)[keyof typeof DeliveriesScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    origin: 'origin',
    destination: 'destination',
    distance: 'distance',
    estimatedTime: 'estimatedTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DriverOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    email: 'email',
    licenseNumber: 'licenseNumber',
    vechile: 'vechile'
  };

  export type DriverOrderByRelevanceFieldEnum = (typeof DriverOrderByRelevanceFieldEnum)[keyof typeof DriverOrderByRelevanceFieldEnum]


  export const DeliveriesOrderByRelevanceFieldEnum: {
    deliveryId: 'deliveryId',
    status: 'status'
  };

  export type DeliveriesOrderByRelevanceFieldEnum = (typeof DeliveriesOrderByRelevanceFieldEnum)[keyof typeof DeliveriesOrderByRelevanceFieldEnum]


  export const RouteOrderByRelevanceFieldEnum: {
    origin: 'origin',
    destination: 'destination',
    estimatedTime: 'estimatedTime'
  };

  export type RouteOrderByRelevanceFieldEnum = (typeof RouteOrderByRelevanceFieldEnum)[keyof typeof RouteOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: IntFilter<"Driver"> | number
    fullName?: StringFilter<"Driver"> | string
    email?: StringFilter<"Driver"> | string
    licenseNumber?: StringFilter<"Driver"> | string
    vechile?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    deliveries?: DeliveriesListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    licenseNumber?: SortOrder
    vechile?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveries?: DeliveriesOrderByRelationAggregateInput
    _relevance?: DriverOrderByRelevanceInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    licenseNumber?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    fullName?: StringFilter<"Driver"> | string
    vechile?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    deliveries?: DeliveriesListRelationFilter
  }, "id" | "email" | "licenseNumber">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    licenseNumber?: SortOrder
    vechile?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Driver"> | number
    fullName?: StringWithAggregatesFilter<"Driver"> | string
    email?: StringWithAggregatesFilter<"Driver"> | string
    licenseNumber?: StringWithAggregatesFilter<"Driver"> | string
    vechile?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type DeliveriesWhereInput = {
    AND?: DeliveriesWhereInput | DeliveriesWhereInput[]
    OR?: DeliveriesWhereInput[]
    NOT?: DeliveriesWhereInput | DeliveriesWhereInput[]
    id?: IntFilter<"Deliveries"> | number
    deliveryId?: StringFilter<"Deliveries"> | string
    status?: StringFilter<"Deliveries"> | string
    driverId?: IntNullableFilter<"Deliveries"> | number | null
    routeId?: IntFilter<"Deliveries"> | number
    createdAt?: DateTimeFilter<"Deliveries"> | Date | string
    updatedAt?: DateTimeFilter<"Deliveries"> | Date | string
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }

  export type DeliveriesOrderByWithRelationInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    status?: SortOrder
    driverId?: SortOrderInput | SortOrder
    routeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    _relevance?: DeliveriesOrderByRelevanceInput
  }

  export type DeliveriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    deliveryId?: string
    AND?: DeliveriesWhereInput | DeliveriesWhereInput[]
    OR?: DeliveriesWhereInput[]
    NOT?: DeliveriesWhereInput | DeliveriesWhereInput[]
    status?: StringFilter<"Deliveries"> | string
    driverId?: IntNullableFilter<"Deliveries"> | number | null
    routeId?: IntFilter<"Deliveries"> | number
    createdAt?: DateTimeFilter<"Deliveries"> | Date | string
    updatedAt?: DateTimeFilter<"Deliveries"> | Date | string
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }, "id" | "deliveryId">

  export type DeliveriesOrderByWithAggregationInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    status?: SortOrder
    driverId?: SortOrderInput | SortOrder
    routeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeliveriesCountOrderByAggregateInput
    _avg?: DeliveriesAvgOrderByAggregateInput
    _max?: DeliveriesMaxOrderByAggregateInput
    _min?: DeliveriesMinOrderByAggregateInput
    _sum?: DeliveriesSumOrderByAggregateInput
  }

  export type DeliveriesScalarWhereWithAggregatesInput = {
    AND?: DeliveriesScalarWhereWithAggregatesInput | DeliveriesScalarWhereWithAggregatesInput[]
    OR?: DeliveriesScalarWhereWithAggregatesInput[]
    NOT?: DeliveriesScalarWhereWithAggregatesInput | DeliveriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deliveries"> | number
    deliveryId?: StringWithAggregatesFilter<"Deliveries"> | string
    status?: StringWithAggregatesFilter<"Deliveries"> | string
    driverId?: IntNullableWithAggregatesFilter<"Deliveries"> | number | null
    routeId?: IntWithAggregatesFilter<"Deliveries"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Deliveries"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deliveries"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: IntFilter<"Route"> | number
    origin?: StringFilter<"Route"> | string
    destination?: StringFilter<"Route"> | string
    distance?: FloatNullableFilter<"Route"> | number | null
    estimatedTime?: StringNullableFilter<"Route"> | string | null
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    deliveries?: DeliveriesListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    distance?: SortOrderInput | SortOrder
    estimatedTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveries?: DeliveriesOrderByRelationAggregateInput
    _relevance?: RouteOrderByRelevanceInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    origin?: StringFilter<"Route"> | string
    destination?: StringFilter<"Route"> | string
    distance?: FloatNullableFilter<"Route"> | number | null
    estimatedTime?: StringNullableFilter<"Route"> | string | null
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    deliveries?: DeliveriesListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    distance?: SortOrderInput | SortOrder
    estimatedTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Route"> | number
    origin?: StringWithAggregatesFilter<"Route"> | string
    destination?: StringWithAggregatesFilter<"Route"> | string
    distance?: FloatNullableWithAggregatesFilter<"Route"> | number | null
    estimatedTime?: StringNullableWithAggregatesFilter<"Route"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type DriverCreateInput = {
    fullName: string
    email: string
    licenseNumber: string
    vechile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveriesCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    licenseNumber: string
    vechile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveriesUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vechile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveriesUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vechile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveriesUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: number
    fullName: string
    email: string
    licenseNumber: string
    vechile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vechile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vechile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesCreateInput = {
    deliveryId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutDeliveriesInput
    route: RouteCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateInput = {
    id?: number
    deliveryId: string
    status?: string
    driverId?: number | null
    routeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesUpdateInput = {
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutDeliveriesNestedInput
    route?: RouteUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    routeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesCreateManyInput = {
    id?: number
    deliveryId: string
    status?: string
    driverId?: number | null
    routeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesUpdateManyMutationInput = {
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    routeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    origin: string
    destination: string
    distance?: number | null
    estimatedTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveriesCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: number
    origin: string
    destination: string
    distance?: number | null
    estimatedTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveriesUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveriesUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveriesUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: number
    origin: string
    destination: string
    distance?: number | null
    estimatedTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DeliveriesListRelationFilter = {
    every?: DeliveriesWhereInput
    some?: DeliveriesWhereInput
    none?: DeliveriesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeliveriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverOrderByRelevanceInput = {
    fields: DriverOrderByRelevanceFieldEnum | DriverOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    licenseNumber?: SortOrder
    vechile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    licenseNumber?: SortOrder
    vechile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    licenseNumber?: SortOrder
    vechile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type DeliveriesOrderByRelevanceInput = {
    fields: DeliveriesOrderByRelevanceFieldEnum | DeliveriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeliveriesCountOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    status?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveriesAvgOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
  }

  export type DeliveriesMaxOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    status?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveriesMinOrderByAggregateInput = {
    id?: SortOrder
    deliveryId?: SortOrder
    status?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveriesSumOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RouteOrderByRelevanceInput = {
    fields: RouteOrderByRelevanceFieldEnum | RouteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    distance?: SortOrder
    estimatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    distance?: SortOrder
    estimatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    distance?: SortOrder
    estimatedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DeliveriesCreateNestedManyWithoutDriverInput = {
    create?: XOR<DeliveriesCreateWithoutDriverInput, DeliveriesUncheckedCreateWithoutDriverInput> | DeliveriesCreateWithoutDriverInput[] | DeliveriesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutDriverInput | DeliveriesCreateOrConnectWithoutDriverInput[]
    createMany?: DeliveriesCreateManyDriverInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type DeliveriesUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DeliveriesCreateWithoutDriverInput, DeliveriesUncheckedCreateWithoutDriverInput> | DeliveriesCreateWithoutDriverInput[] | DeliveriesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutDriverInput | DeliveriesCreateOrConnectWithoutDriverInput[]
    createMany?: DeliveriesCreateManyDriverInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeliveriesUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DeliveriesCreateWithoutDriverInput, DeliveriesUncheckedCreateWithoutDriverInput> | DeliveriesCreateWithoutDriverInput[] | DeliveriesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutDriverInput | DeliveriesCreateOrConnectWithoutDriverInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutDriverInput | DeliveriesUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DeliveriesCreateManyDriverInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutDriverInput | DeliveriesUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutDriverInput | DeliveriesUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeliveriesUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DeliveriesCreateWithoutDriverInput, DeliveriesUncheckedCreateWithoutDriverInput> | DeliveriesCreateWithoutDriverInput[] | DeliveriesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutDriverInput | DeliveriesCreateOrConnectWithoutDriverInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutDriverInput | DeliveriesUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DeliveriesCreateManyDriverInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutDriverInput | DeliveriesUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutDriverInput | DeliveriesUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type DriverCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<DriverCreateWithoutDeliveriesInput, DriverUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDeliveriesInput
    connect?: DriverWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<RouteCreateWithoutDeliveriesInput, RouteUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutDeliveriesInput
    connect?: RouteWhereUniqueInput
  }

  export type DriverUpdateOneWithoutDeliveriesNestedInput = {
    create?: XOR<DriverCreateWithoutDeliveriesInput, DriverUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDeliveriesInput
    upsert?: DriverUpsertWithoutDeliveriesInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutDeliveriesInput, DriverUpdateWithoutDeliveriesInput>, DriverUncheckedUpdateWithoutDeliveriesInput>
  }

  export type RouteUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<RouteCreateWithoutDeliveriesInput, RouteUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutDeliveriesInput
    upsert?: RouteUpsertWithoutDeliveriesInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutDeliveriesInput, RouteUpdateWithoutDeliveriesInput>, RouteUncheckedUpdateWithoutDeliveriesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeliveriesCreateNestedManyWithoutRouteInput = {
    create?: XOR<DeliveriesCreateWithoutRouteInput, DeliveriesUncheckedCreateWithoutRouteInput> | DeliveriesCreateWithoutRouteInput[] | DeliveriesUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutRouteInput | DeliveriesCreateOrConnectWithoutRouteInput[]
    createMany?: DeliveriesCreateManyRouteInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type DeliveriesUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<DeliveriesCreateWithoutRouteInput, DeliveriesUncheckedCreateWithoutRouteInput> | DeliveriesCreateWithoutRouteInput[] | DeliveriesUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutRouteInput | DeliveriesCreateOrConnectWithoutRouteInput[]
    createMany?: DeliveriesCreateManyRouteInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeliveriesUpdateManyWithoutRouteNestedInput = {
    create?: XOR<DeliveriesCreateWithoutRouteInput, DeliveriesUncheckedCreateWithoutRouteInput> | DeliveriesCreateWithoutRouteInput[] | DeliveriesUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutRouteInput | DeliveriesCreateOrConnectWithoutRouteInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutRouteInput | DeliveriesUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: DeliveriesCreateManyRouteInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutRouteInput | DeliveriesUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutRouteInput | DeliveriesUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type DeliveriesUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<DeliveriesCreateWithoutRouteInput, DeliveriesUncheckedCreateWithoutRouteInput> | DeliveriesCreateWithoutRouteInput[] | DeliveriesUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutRouteInput | DeliveriesCreateOrConnectWithoutRouteInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutRouteInput | DeliveriesUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: DeliveriesCreateManyRouteInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutRouteInput | DeliveriesUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutRouteInput | DeliveriesUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DeliveriesCreateWithoutDriverInput = {
    deliveryId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateWithoutDriverInput = {
    id?: number
    deliveryId: string
    status?: string
    routeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesCreateOrConnectWithoutDriverInput = {
    where: DeliveriesWhereUniqueInput
    create: XOR<DeliveriesCreateWithoutDriverInput, DeliveriesUncheckedCreateWithoutDriverInput>
  }

  export type DeliveriesCreateManyDriverInputEnvelope = {
    data: DeliveriesCreateManyDriverInput | DeliveriesCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type DeliveriesUpsertWithWhereUniqueWithoutDriverInput = {
    where: DeliveriesWhereUniqueInput
    update: XOR<DeliveriesUpdateWithoutDriverInput, DeliveriesUncheckedUpdateWithoutDriverInput>
    create: XOR<DeliveriesCreateWithoutDriverInput, DeliveriesUncheckedCreateWithoutDriverInput>
  }

  export type DeliveriesUpdateWithWhereUniqueWithoutDriverInput = {
    where: DeliveriesWhereUniqueInput
    data: XOR<DeliveriesUpdateWithoutDriverInput, DeliveriesUncheckedUpdateWithoutDriverInput>
  }

  export type DeliveriesUpdateManyWithWhereWithoutDriverInput = {
    where: DeliveriesScalarWhereInput
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyWithoutDriverInput>
  }

  export type DeliveriesScalarWhereInput = {
    AND?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
    OR?: DeliveriesScalarWhereInput[]
    NOT?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
    id?: IntFilter<"Deliveries"> | number
    deliveryId?: StringFilter<"Deliveries"> | string
    status?: StringFilter<"Deliveries"> | string
    driverId?: IntNullableFilter<"Deliveries"> | number | null
    routeId?: IntFilter<"Deliveries"> | number
    createdAt?: DateTimeFilter<"Deliveries"> | Date | string
    updatedAt?: DateTimeFilter<"Deliveries"> | Date | string
  }

  export type DriverCreateWithoutDeliveriesInput = {
    fullName: string
    email: string
    licenseNumber: string
    vechile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    fullName: string
    email: string
    licenseNumber: string
    vechile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverCreateOrConnectWithoutDeliveriesInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutDeliveriesInput, DriverUncheckedCreateWithoutDeliveriesInput>
  }

  export type RouteCreateWithoutDeliveriesInput = {
    origin: string
    destination: string
    distance?: number | null
    estimatedTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    origin: string
    destination: string
    distance?: number | null
    estimatedTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteCreateOrConnectWithoutDeliveriesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutDeliveriesInput, RouteUncheckedCreateWithoutDeliveriesInput>
  }

  export type DriverUpsertWithoutDeliveriesInput = {
    update: XOR<DriverUpdateWithoutDeliveriesInput, DriverUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<DriverCreateWithoutDeliveriesInput, DriverUncheckedCreateWithoutDeliveriesInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutDeliveriesInput, DriverUncheckedUpdateWithoutDeliveriesInput>
  }

  export type DriverUpdateWithoutDeliveriesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vechile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vechile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpsertWithoutDeliveriesInput = {
    update: XOR<RouteUpdateWithoutDeliveriesInput, RouteUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<RouteCreateWithoutDeliveriesInput, RouteUncheckedCreateWithoutDeliveriesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutDeliveriesInput, RouteUncheckedUpdateWithoutDeliveriesInput>
  }

  export type RouteUpdateWithoutDeliveriesInput = {
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesCreateWithoutRouteInput = {
    deliveryId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateWithoutRouteInput = {
    id?: number
    deliveryId: string
    status?: string
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesCreateOrConnectWithoutRouteInput = {
    where: DeliveriesWhereUniqueInput
    create: XOR<DeliveriesCreateWithoutRouteInput, DeliveriesUncheckedCreateWithoutRouteInput>
  }

  export type DeliveriesCreateManyRouteInputEnvelope = {
    data: DeliveriesCreateManyRouteInput | DeliveriesCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type DeliveriesUpsertWithWhereUniqueWithoutRouteInput = {
    where: DeliveriesWhereUniqueInput
    update: XOR<DeliveriesUpdateWithoutRouteInput, DeliveriesUncheckedUpdateWithoutRouteInput>
    create: XOR<DeliveriesCreateWithoutRouteInput, DeliveriesUncheckedCreateWithoutRouteInput>
  }

  export type DeliveriesUpdateWithWhereUniqueWithoutRouteInput = {
    where: DeliveriesWhereUniqueInput
    data: XOR<DeliveriesUpdateWithoutRouteInput, DeliveriesUncheckedUpdateWithoutRouteInput>
  }

  export type DeliveriesUpdateManyWithWhereWithoutRouteInput = {
    where: DeliveriesScalarWhereInput
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyWithoutRouteInput>
  }

  export type DeliveriesCreateManyDriverInput = {
    id?: number
    deliveryId: string
    status?: string
    routeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesUpdateWithoutDriverInput = {
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    routeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    routeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesCreateManyRouteInput = {
    id?: number
    deliveryId: string
    status?: string
    driverId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesUpdateWithoutRouteInput = {
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveryId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}