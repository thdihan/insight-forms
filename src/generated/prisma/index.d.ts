
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model FormField
 * 
 */
export type FormField = $Result.DefaultSelection<Prisma.$FormFieldPayload>
/**
 * Model FieldOption
 * 
 */
export type FieldOption = $Result.DefaultSelection<Prisma.$FieldOptionPayload>
/**
 * Model FormSubmission
 * 
 */
export type FormSubmission = $Result.DefaultSelection<Prisma.$FormSubmissionPayload>
/**
 * Model FieldResponse
 * 
 */
export type FieldResponse = $Result.DefaultSelection<Prisma.$FieldResponsePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FieldType: {
  text: 'text',
  checkbox: 'checkbox',
  radio: 'radio',
  table: 'table',
  select: 'select'
};

export type FieldType = (typeof FieldType)[keyof typeof FieldType]

}

export type FieldType = $Enums.FieldType

export const FieldType: typeof $Enums.FieldType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formField`: Exposes CRUD operations for the **FormField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormFields
    * const formFields = await prisma.formField.findMany()
    * ```
    */
  get formField(): Prisma.FormFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fieldOption`: Exposes CRUD operations for the **FieldOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FieldOptions
    * const fieldOptions = await prisma.fieldOption.findMany()
    * ```
    */
  get fieldOption(): Prisma.FieldOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formSubmission`: Exposes CRUD operations for the **FormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormSubmissions
    * const formSubmissions = await prisma.formSubmission.findMany()
    * ```
    */
  get formSubmission(): Prisma.FormSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fieldResponse`: Exposes CRUD operations for the **FieldResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FieldResponses
    * const fieldResponses = await prisma.fieldResponse.findMany()
    * ```
    */
  get fieldResponse(): Prisma.FieldResponseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Form: 'Form',
    FormField: 'FormField',
    FieldOption: 'FieldOption',
    FormSubmission: 'FormSubmission',
    FieldResponse: 'FieldResponse'
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
      modelProps: "user" | "form" | "formField" | "fieldOption" | "formSubmission" | "fieldResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      FormField: {
        payload: Prisma.$FormFieldPayload<ExtArgs>
        fields: Prisma.FormFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          findFirst: {
            args: Prisma.FormFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          findMany: {
            args: Prisma.FormFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>[]
          }
          create: {
            args: Prisma.FormFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          createMany: {
            args: Prisma.FormFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>[]
          }
          delete: {
            args: Prisma.FormFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          update: {
            args: Prisma.FormFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          deleteMany: {
            args: Prisma.FormFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>[]
          }
          upsert: {
            args: Prisma.FormFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          aggregate: {
            args: Prisma.FormFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormField>
          }
          groupBy: {
            args: Prisma.FormFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormFieldCountArgs<ExtArgs>
            result: $Utils.Optional<FormFieldCountAggregateOutputType> | number
          }
        }
      }
      FieldOption: {
        payload: Prisma.$FieldOptionPayload<ExtArgs>
        fields: Prisma.FieldOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          findFirst: {
            args: Prisma.FieldOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          findMany: {
            args: Prisma.FieldOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>[]
          }
          create: {
            args: Prisma.FieldOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          createMany: {
            args: Prisma.FieldOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>[]
          }
          delete: {
            args: Prisma.FieldOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          update: {
            args: Prisma.FieldOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          deleteMany: {
            args: Prisma.FieldOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>[]
          }
          upsert: {
            args: Prisma.FieldOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          aggregate: {
            args: Prisma.FieldOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFieldOption>
          }
          groupBy: {
            args: Prisma.FieldOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldOptionCountArgs<ExtArgs>
            result: $Utils.Optional<FieldOptionCountAggregateOutputType> | number
          }
        }
      }
      FormSubmission: {
        payload: Prisma.$FormSubmissionPayload<ExtArgs>
        fields: Prisma.FormSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findFirst: {
            args: Prisma.FormSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findMany: {
            args: Prisma.FormSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          create: {
            args: Prisma.FormSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          createMany: {
            args: Prisma.FormSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          delete: {
            args: Prisma.FormSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          update: {
            args: Prisma.FormSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.FormSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.FormSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          aggregate: {
            args: Prisma.FormSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormSubmission>
          }
          groupBy: {
            args: Prisma.FormSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionCountAggregateOutputType> | number
          }
        }
      }
      FieldResponse: {
        payload: Prisma.$FieldResponsePayload<ExtArgs>
        fields: Prisma.FieldResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>
          }
          findFirst: {
            args: Prisma.FieldResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>
          }
          findMany: {
            args: Prisma.FieldResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>[]
          }
          create: {
            args: Prisma.FieldResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>
          }
          createMany: {
            args: Prisma.FieldResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>[]
          }
          delete: {
            args: Prisma.FieldResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>
          }
          update: {
            args: Prisma.FieldResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>
          }
          deleteMany: {
            args: Prisma.FieldResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>[]
          }
          upsert: {
            args: Prisma.FieldResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldResponsePayload>
          }
          aggregate: {
            args: Prisma.FieldResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFieldResponse>
          }
          groupBy: {
            args: Prisma.FieldResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldResponseCountArgs<ExtArgs>
            result: $Utils.Optional<FieldResponseCountAggregateOutputType> | number
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
    user?: UserOmit
    form?: FormOmit
    formField?: FormFieldOmit
    fieldOption?: FieldOptionOmit
    formSubmission?: FormSubmissionOmit
    fieldResponse?: FieldResponseOmit
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
   * Count Type FormCountOutputType
   */

  export type FormCountOutputType = {
    fields: number
    submissions: number
  }

  export type FormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | FormCountOutputTypeCountFieldsArgs
    submissions?: boolean | FormCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormFieldWhereInput
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
  }


  /**
   * Count Type FormFieldCountOutputType
   */

  export type FormFieldCountOutputType = {
    responses: number
    options: number
  }

  export type FormFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | FormFieldCountOutputTypeCountResponsesArgs
    options?: boolean | FormFieldCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * FormFieldCountOutputType without action
   */
  export type FormFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormFieldCountOutputType
     */
    select?: FormFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormFieldCountOutputType without action
   */
  export type FormFieldCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldResponseWhereInput
  }

  /**
   * FormFieldCountOutputType without action
   */
  export type FormFieldCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldOptionWhereInput
  }


  /**
   * Count Type FormSubmissionCountOutputType
   */

  export type FormSubmissionCountOutputType = {
    responses: number
  }

  export type FormSubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | FormSubmissionCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * FormSubmissionCountOutputType without action
   */
  export type FormSubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionCountOutputType
     */
    select?: FormSubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormSubmissionCountOutputType without action
   */
  export type FormSubmissionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormAvgAggregateOutputType = {
    id: number | null
  }

  export type FormSumAggregateOutputType = {
    id: number | null
  }

  export type FormMinAggregateOutputType = {
    id: number | null
    formName: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormMaxAggregateOutputType = {
    id: number | null
    formName: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    formName: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormAvgAggregateInputType = {
    id?: true
  }

  export type FormSumAggregateInputType = {
    id?: true
  }

  export type FormMinAggregateInputType = {
    id?: true
    formName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    formName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    formName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _avg?: FormAvgAggregateInputType
    _sum?: FormSumAggregateInputType
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: number
    formName: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fields?: boolean | Form$fieldsArgs<ExtArgs>
    submissions?: boolean | Form$submissionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["form"]>

  export type FormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    formName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formName" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["form"]>
  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | Form$fieldsArgs<ExtArgs>
    submissions?: boolean | Form$submissionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      fields: Prisma.$FormFieldPayload<ExtArgs>[]
      submissions: Prisma.$FormSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      formName: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormCreateManyAndReturnArgs>(args?: SelectSubset<T, FormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormUpdateManyAndReturnArgs>(args: SelectSubset<T, FormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
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
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fields<T extends Form$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Form$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Form$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Form$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Form model
   */
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'Int'>
    readonly formName: FieldRef<"Form", 'String'>
    readonly description: FieldRef<"Form", 'String'>
    readonly createdAt: FieldRef<"Form", 'DateTime'>
    readonly updatedAt: FieldRef<"Form", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form createManyAndReturn
   */
  export type FormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form updateManyAndReturn
   */
  export type FormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Form.fields
   */
  export type Form$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    where?: FormFieldWhereInput
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    cursor?: FormFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormFieldScalarFieldEnum | FormFieldScalarFieldEnum[]
  }

  /**
   * Form.submissions
   */
  export type Form$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    cursor?: FormSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
  }


  /**
   * Model FormField
   */

  export type AggregateFormField = {
    _count: FormFieldCountAggregateOutputType | null
    _avg: FormFieldAvgAggregateOutputType | null
    _sum: FormFieldSumAggregateOutputType | null
    _min: FormFieldMinAggregateOutputType | null
    _max: FormFieldMaxAggregateOutputType | null
  }

  export type FormFieldAvgAggregateOutputType = {
    id: number | null
    formId: number | null
    order: number | null
  }

  export type FormFieldSumAggregateOutputType = {
    id: number | null
    formId: number | null
    order: number | null
  }

  export type FormFieldMinAggregateOutputType = {
    id: number | null
    formId: number | null
    order: number | null
    type: $Enums.FieldType | null
    label: string | null
    required: boolean | null
    placeholder: string | null
    multiline: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormFieldMaxAggregateOutputType = {
    id: number | null
    formId: number | null
    order: number | null
    type: $Enums.FieldType | null
    label: string | null
    required: boolean | null
    placeholder: string | null
    multiline: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormFieldCountAggregateOutputType = {
    id: number
    formId: number
    order: number
    type: number
    label: number
    required: number
    placeholder: number
    multiline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormFieldAvgAggregateInputType = {
    id?: true
    formId?: true
    order?: true
  }

  export type FormFieldSumAggregateInputType = {
    id?: true
    formId?: true
    order?: true
  }

  export type FormFieldMinAggregateInputType = {
    id?: true
    formId?: true
    order?: true
    type?: true
    label?: true
    required?: true
    placeholder?: true
    multiline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormFieldMaxAggregateInputType = {
    id?: true
    formId?: true
    order?: true
    type?: true
    label?: true
    required?: true
    placeholder?: true
    multiline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormFieldCountAggregateInputType = {
    id?: true
    formId?: true
    order?: true
    type?: true
    label?: true
    required?: true
    placeholder?: true
    multiline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormField to aggregate.
     */
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     */
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormFields
    **/
    _count?: true | FormFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormFieldMaxAggregateInputType
  }

  export type GetFormFieldAggregateType<T extends FormFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateFormField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormField[P]>
      : GetScalarType<T[P], AggregateFormField[P]>
  }




  export type FormFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormFieldWhereInput
    orderBy?: FormFieldOrderByWithAggregationInput | FormFieldOrderByWithAggregationInput[]
    by: FormFieldScalarFieldEnum[] | FormFieldScalarFieldEnum
    having?: FormFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormFieldCountAggregateInputType | true
    _avg?: FormFieldAvgAggregateInputType
    _sum?: FormFieldSumAggregateInputType
    _min?: FormFieldMinAggregateInputType
    _max?: FormFieldMaxAggregateInputType
  }

  export type FormFieldGroupByOutputType = {
    id: number
    formId: number
    order: number
    type: $Enums.FieldType
    label: string
    required: boolean
    placeholder: string | null
    multiline: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: FormFieldCountAggregateOutputType | null
    _avg: FormFieldAvgAggregateOutputType | null
    _sum: FormFieldSumAggregateOutputType | null
    _min: FormFieldMinAggregateOutputType | null
    _max: FormFieldMaxAggregateOutputType | null
  }

  type GetFormFieldGroupByPayload<T extends FormFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormFieldGroupByOutputType[P]>
            : GetScalarType<T[P], FormFieldGroupByOutputType[P]>
        }
      >
    >


  export type FormFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    order?: boolean
    type?: boolean
    label?: boolean
    required?: boolean
    placeholder?: boolean
    multiline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    responses?: boolean | FormField$responsesArgs<ExtArgs>
    options?: boolean | FormField$optionsArgs<ExtArgs>
    _count?: boolean | FormFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    order?: boolean
    type?: boolean
    label?: boolean
    required?: boolean
    placeholder?: boolean
    multiline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    order?: boolean
    type?: boolean
    label?: boolean
    required?: boolean
    placeholder?: boolean
    multiline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectScalar = {
    id?: boolean
    formId?: boolean
    order?: boolean
    type?: boolean
    label?: boolean
    required?: boolean
    placeholder?: boolean
    multiline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "order" | "type" | "label" | "required" | "placeholder" | "multiline" | "createdAt" | "updatedAt", ExtArgs["result"]["formField"]>
  export type FormFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    responses?: boolean | FormField$responsesArgs<ExtArgs>
    options?: boolean | FormField$optionsArgs<ExtArgs>
    _count?: boolean | FormFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }
  export type FormFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }

  export type $FormFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormField"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>
      responses: Prisma.$FieldResponsePayload<ExtArgs>[]
      options: Prisma.$FieldOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      formId: number
      order: number
      type: $Enums.FieldType
      label: string
      required: boolean
      placeholder: string | null
      multiline: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formField"]>
    composites: {}
  }

  type FormFieldGetPayload<S extends boolean | null | undefined | FormFieldDefaultArgs> = $Result.GetResult<Prisma.$FormFieldPayload, S>

  type FormFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormFieldCountAggregateInputType | true
    }

  export interface FormFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormField'], meta: { name: 'FormField' } }
    /**
     * Find zero or one FormField that matches the filter.
     * @param {FormFieldFindUniqueArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFieldFindUniqueArgs>(args: SelectSubset<T, FormFieldFindUniqueArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFieldFindUniqueOrThrowArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindFirstArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFieldFindFirstArgs>(args?: SelectSubset<T, FormFieldFindFirstArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindFirstOrThrowArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormFields
     * const formFields = await prisma.formField.findMany()
     * 
     * // Get first 10 FormFields
     * const formFields = await prisma.formField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formFieldWithIdOnly = await prisma.formField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFieldFindManyArgs>(args?: SelectSubset<T, FormFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormField.
     * @param {FormFieldCreateArgs} args - Arguments to create a FormField.
     * @example
     * // Create one FormField
     * const FormField = await prisma.formField.create({
     *   data: {
     *     // ... data to create a FormField
     *   }
     * })
     * 
     */
    create<T extends FormFieldCreateArgs>(args: SelectSubset<T, FormFieldCreateArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormFields.
     * @param {FormFieldCreateManyArgs} args - Arguments to create many FormFields.
     * @example
     * // Create many FormFields
     * const formField = await prisma.formField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormFieldCreateManyArgs>(args?: SelectSubset<T, FormFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormFields and returns the data saved in the database.
     * @param {FormFieldCreateManyAndReturnArgs} args - Arguments to create many FormFields.
     * @example
     * // Create many FormFields
     * const formField = await prisma.formField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormFields and only return the `id`
     * const formFieldWithIdOnly = await prisma.formField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, FormFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormField.
     * @param {FormFieldDeleteArgs} args - Arguments to delete one FormField.
     * @example
     * // Delete one FormField
     * const FormField = await prisma.formField.delete({
     *   where: {
     *     // ... filter to delete one FormField
     *   }
     * })
     * 
     */
    delete<T extends FormFieldDeleteArgs>(args: SelectSubset<T, FormFieldDeleteArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormField.
     * @param {FormFieldUpdateArgs} args - Arguments to update one FormField.
     * @example
     * // Update one FormField
     * const formField = await prisma.formField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormFieldUpdateArgs>(args: SelectSubset<T, FormFieldUpdateArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormFields.
     * @param {FormFieldDeleteManyArgs} args - Arguments to filter FormFields to delete.
     * @example
     * // Delete a few FormFields
     * const { count } = await prisma.formField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormFieldDeleteManyArgs>(args?: SelectSubset<T, FormFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormFields
     * const formField = await prisma.formField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormFieldUpdateManyArgs>(args: SelectSubset<T, FormFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormFields and returns the data updated in the database.
     * @param {FormFieldUpdateManyAndReturnArgs} args - Arguments to update many FormFields.
     * @example
     * // Update many FormFields
     * const formField = await prisma.formField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormFields and only return the `id`
     * const formFieldWithIdOnly = await prisma.formField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, FormFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormField.
     * @param {FormFieldUpsertArgs} args - Arguments to update or create a FormField.
     * @example
     * // Update or create a FormField
     * const formField = await prisma.formField.upsert({
     *   create: {
     *     // ... data to create a FormField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormField we want to update
     *   }
     * })
     */
    upsert<T extends FormFieldUpsertArgs>(args: SelectSubset<T, FormFieldUpsertArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldCountArgs} args - Arguments to filter FormFields to count.
     * @example
     * // Count the number of FormFields
     * const count = await prisma.formField.count({
     *   where: {
     *     // ... the filter for the FormFields we want to count
     *   }
     * })
    **/
    count<T extends FormFieldCountArgs>(
      args?: Subset<T, FormFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormFieldAggregateArgs>(args: Subset<T, FormFieldAggregateArgs>): Prisma.PrismaPromise<GetFormFieldAggregateType<T>>

    /**
     * Group by FormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldGroupByArgs} args - Group by arguments.
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
      T extends FormFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormFieldGroupByArgs['orderBy'] }
        : { orderBy?: FormFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormField model
   */
  readonly fields: FormFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends FormField$responsesArgs<ExtArgs> = {}>(args?: Subset<T, FormField$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    options<T extends FormField$optionsArgs<ExtArgs> = {}>(args?: Subset<T, FormField$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FormField model
   */
  interface FormFieldFieldRefs {
    readonly id: FieldRef<"FormField", 'Int'>
    readonly formId: FieldRef<"FormField", 'Int'>
    readonly order: FieldRef<"FormField", 'Int'>
    readonly type: FieldRef<"FormField", 'FieldType'>
    readonly label: FieldRef<"FormField", 'String'>
    readonly required: FieldRef<"FormField", 'Boolean'>
    readonly placeholder: FieldRef<"FormField", 'String'>
    readonly multiline: FieldRef<"FormField", 'Boolean'>
    readonly createdAt: FieldRef<"FormField", 'DateTime'>
    readonly updatedAt: FieldRef<"FormField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormField findUnique
   */
  export type FormFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormField to fetch.
     */
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField findUniqueOrThrow
   */
  export type FormFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormField to fetch.
     */
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField findFirst
   */
  export type FormFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormField to fetch.
     */
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     */
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormFields.
     */
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormFields.
     */
    distinct?: FormFieldScalarFieldEnum | FormFieldScalarFieldEnum[]
  }

  /**
   * FormField findFirstOrThrow
   */
  export type FormFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormField to fetch.
     */
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     */
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormFields.
     */
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormFields.
     */
    distinct?: FormFieldScalarFieldEnum | FormFieldScalarFieldEnum[]
  }

  /**
   * FormField findMany
   */
  export type FormFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormFields to fetch.
     */
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     */
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormFields.
     */
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     */
    skip?: number
    distinct?: FormFieldScalarFieldEnum | FormFieldScalarFieldEnum[]
  }

  /**
   * FormField create
   */
  export type FormFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a FormField.
     */
    data: XOR<FormFieldCreateInput, FormFieldUncheckedCreateInput>
  }

  /**
   * FormField createMany
   */
  export type FormFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormFields.
     */
    data: FormFieldCreateManyInput | FormFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormField createManyAndReturn
   */
  export type FormFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * The data used to create many FormFields.
     */
    data: FormFieldCreateManyInput | FormFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormField update
   */
  export type FormFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a FormField.
     */
    data: XOR<FormFieldUpdateInput, FormFieldUncheckedUpdateInput>
    /**
     * Choose, which FormField to update.
     */
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField updateMany
   */
  export type FormFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormFields.
     */
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyInput>
    /**
     * Filter which FormFields to update
     */
    where?: FormFieldWhereInput
    /**
     * Limit how many FormFields to update.
     */
    limit?: number
  }

  /**
   * FormField updateManyAndReturn
   */
  export type FormFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * The data used to update FormFields.
     */
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyInput>
    /**
     * Filter which FormFields to update
     */
    where?: FormFieldWhereInput
    /**
     * Limit how many FormFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormField upsert
   */
  export type FormFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the FormField to update in case it exists.
     */
    where: FormFieldWhereUniqueInput
    /**
     * In case the FormField found by the `where` argument doesn't exist, create a new FormField with this data.
     */
    create: XOR<FormFieldCreateInput, FormFieldUncheckedCreateInput>
    /**
     * In case the FormField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormFieldUpdateInput, FormFieldUncheckedUpdateInput>
  }

  /**
   * FormField delete
   */
  export type FormFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter which FormField to delete.
     */
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField deleteMany
   */
  export type FormFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormFields to delete
     */
    where?: FormFieldWhereInput
    /**
     * Limit how many FormFields to delete.
     */
    limit?: number
  }

  /**
   * FormField.responses
   */
  export type FormField$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    where?: FieldResponseWhereInput
    orderBy?: FieldResponseOrderByWithRelationInput | FieldResponseOrderByWithRelationInput[]
    cursor?: FieldResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldResponseScalarFieldEnum | FieldResponseScalarFieldEnum[]
  }

  /**
   * FormField.options
   */
  export type FormField$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    where?: FieldOptionWhereInput
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    cursor?: FieldOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldOptionScalarFieldEnum | FieldOptionScalarFieldEnum[]
  }

  /**
   * FormField without action
   */
  export type FormFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
  }


  /**
   * Model FieldOption
   */

  export type AggregateFieldOption = {
    _count: FieldOptionCountAggregateOutputType | null
    _avg: FieldOptionAvgAggregateOutputType | null
    _sum: FieldOptionSumAggregateOutputType | null
    _min: FieldOptionMinAggregateOutputType | null
    _max: FieldOptionMaxAggregateOutputType | null
  }

  export type FieldOptionAvgAggregateOutputType = {
    id: number | null
    fieldId: number | null
  }

  export type FieldOptionSumAggregateOutputType = {
    id: number | null
    fieldId: number | null
  }

  export type FieldOptionMinAggregateOutputType = {
    id: number | null
    label: string | null
    fieldId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldOptionMaxAggregateOutputType = {
    id: number | null
    label: string | null
    fieldId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldOptionCountAggregateOutputType = {
    id: number
    label: number
    fieldId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FieldOptionAvgAggregateInputType = {
    id?: true
    fieldId?: true
  }

  export type FieldOptionSumAggregateInputType = {
    id?: true
    fieldId?: true
  }

  export type FieldOptionMinAggregateInputType = {
    id?: true
    label?: true
    fieldId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldOptionMaxAggregateInputType = {
    id?: true
    label?: true
    fieldId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldOptionCountAggregateInputType = {
    id?: true
    label?: true
    fieldId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FieldOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldOption to aggregate.
     */
    where?: FieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldOptions to fetch.
     */
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FieldOptions
    **/
    _count?: true | FieldOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldOptionMaxAggregateInputType
  }

  export type GetFieldOptionAggregateType<T extends FieldOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldOption[P]>
      : GetScalarType<T[P], AggregateFieldOption[P]>
  }




  export type FieldOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldOptionWhereInput
    orderBy?: FieldOptionOrderByWithAggregationInput | FieldOptionOrderByWithAggregationInput[]
    by: FieldOptionScalarFieldEnum[] | FieldOptionScalarFieldEnum
    having?: FieldOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldOptionCountAggregateInputType | true
    _avg?: FieldOptionAvgAggregateInputType
    _sum?: FieldOptionSumAggregateInputType
    _min?: FieldOptionMinAggregateInputType
    _max?: FieldOptionMaxAggregateInputType
  }

  export type FieldOptionGroupByOutputType = {
    id: number
    label: string
    fieldId: number
    createdAt: Date
    updatedAt: Date
    _count: FieldOptionCountAggregateOutputType | null
    _avg: FieldOptionAvgAggregateOutputType | null
    _sum: FieldOptionSumAggregateOutputType | null
    _min: FieldOptionMinAggregateOutputType | null
    _max: FieldOptionMaxAggregateOutputType | null
  }

  type GetFieldOptionGroupByPayload<T extends FieldOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldOptionGroupByOutputType[P]>
            : GetScalarType<T[P], FieldOptionGroupByOutputType[P]>
        }
      >
    >


  export type FieldOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    fieldId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldOption"]>

  export type FieldOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    fieldId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldOption"]>

  export type FieldOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    fieldId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldOption"]>

  export type FieldOptionSelectScalar = {
    id?: boolean
    label?: boolean
    fieldId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FieldOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "fieldId" | "createdAt" | "updatedAt", ExtArgs["result"]["fieldOption"]>
  export type FieldOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }
  export type FieldOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }
  export type FieldOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }

  export type $FieldOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FieldOption"
    objects: {
      field: Prisma.$FormFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      fieldId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fieldOption"]>
    composites: {}
  }

  type FieldOptionGetPayload<S extends boolean | null | undefined | FieldOptionDefaultArgs> = $Result.GetResult<Prisma.$FieldOptionPayload, S>

  type FieldOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldOptionCountAggregateInputType | true
    }

  export interface FieldOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FieldOption'], meta: { name: 'FieldOption' } }
    /**
     * Find zero or one FieldOption that matches the filter.
     * @param {FieldOptionFindUniqueArgs} args - Arguments to find a FieldOption
     * @example
     * // Get one FieldOption
     * const fieldOption = await prisma.fieldOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldOptionFindUniqueArgs>(args: SelectSubset<T, FieldOptionFindUniqueArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FieldOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldOptionFindUniqueOrThrowArgs} args - Arguments to find a FieldOption
     * @example
     * // Get one FieldOption
     * const fieldOption = await prisma.fieldOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionFindFirstArgs} args - Arguments to find a FieldOption
     * @example
     * // Get one FieldOption
     * const fieldOption = await prisma.fieldOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldOptionFindFirstArgs>(args?: SelectSubset<T, FieldOptionFindFirstArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionFindFirstOrThrowArgs} args - Arguments to find a FieldOption
     * @example
     * // Get one FieldOption
     * const fieldOption = await prisma.fieldOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FieldOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FieldOptions
     * const fieldOptions = await prisma.fieldOption.findMany()
     * 
     * // Get first 10 FieldOptions
     * const fieldOptions = await prisma.fieldOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldOptionWithIdOnly = await prisma.fieldOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldOptionFindManyArgs>(args?: SelectSubset<T, FieldOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FieldOption.
     * @param {FieldOptionCreateArgs} args - Arguments to create a FieldOption.
     * @example
     * // Create one FieldOption
     * const FieldOption = await prisma.fieldOption.create({
     *   data: {
     *     // ... data to create a FieldOption
     *   }
     * })
     * 
     */
    create<T extends FieldOptionCreateArgs>(args: SelectSubset<T, FieldOptionCreateArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FieldOptions.
     * @param {FieldOptionCreateManyArgs} args - Arguments to create many FieldOptions.
     * @example
     * // Create many FieldOptions
     * const fieldOption = await prisma.fieldOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldOptionCreateManyArgs>(args?: SelectSubset<T, FieldOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FieldOptions and returns the data saved in the database.
     * @param {FieldOptionCreateManyAndReturnArgs} args - Arguments to create many FieldOptions.
     * @example
     * // Create many FieldOptions
     * const fieldOption = await prisma.fieldOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FieldOptions and only return the `id`
     * const fieldOptionWithIdOnly = await prisma.fieldOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FieldOption.
     * @param {FieldOptionDeleteArgs} args - Arguments to delete one FieldOption.
     * @example
     * // Delete one FieldOption
     * const FieldOption = await prisma.fieldOption.delete({
     *   where: {
     *     // ... filter to delete one FieldOption
     *   }
     * })
     * 
     */
    delete<T extends FieldOptionDeleteArgs>(args: SelectSubset<T, FieldOptionDeleteArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FieldOption.
     * @param {FieldOptionUpdateArgs} args - Arguments to update one FieldOption.
     * @example
     * // Update one FieldOption
     * const fieldOption = await prisma.fieldOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldOptionUpdateArgs>(args: SelectSubset<T, FieldOptionUpdateArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FieldOptions.
     * @param {FieldOptionDeleteManyArgs} args - Arguments to filter FieldOptions to delete.
     * @example
     * // Delete a few FieldOptions
     * const { count } = await prisma.fieldOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldOptionDeleteManyArgs>(args?: SelectSubset<T, FieldOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FieldOptions
     * const fieldOption = await prisma.fieldOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldOptionUpdateManyArgs>(args: SelectSubset<T, FieldOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldOptions and returns the data updated in the database.
     * @param {FieldOptionUpdateManyAndReturnArgs} args - Arguments to update many FieldOptions.
     * @example
     * // Update many FieldOptions
     * const fieldOption = await prisma.fieldOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FieldOptions and only return the `id`
     * const fieldOptionWithIdOnly = await prisma.fieldOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FieldOption.
     * @param {FieldOptionUpsertArgs} args - Arguments to update or create a FieldOption.
     * @example
     * // Update or create a FieldOption
     * const fieldOption = await prisma.fieldOption.upsert({
     *   create: {
     *     // ... data to create a FieldOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FieldOption we want to update
     *   }
     * })
     */
    upsert<T extends FieldOptionUpsertArgs>(args: SelectSubset<T, FieldOptionUpsertArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FieldOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionCountArgs} args - Arguments to filter FieldOptions to count.
     * @example
     * // Count the number of FieldOptions
     * const count = await prisma.fieldOption.count({
     *   where: {
     *     // ... the filter for the FieldOptions we want to count
     *   }
     * })
    **/
    count<T extends FieldOptionCountArgs>(
      args?: Subset<T, FieldOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FieldOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FieldOptionAggregateArgs>(args: Subset<T, FieldOptionAggregateArgs>): Prisma.PrismaPromise<GetFieldOptionAggregateType<T>>

    /**
     * Group by FieldOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionGroupByArgs} args - Group by arguments.
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
      T extends FieldOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldOptionGroupByArgs['orderBy'] }
        : { orderBy?: FieldOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FieldOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FieldOption model
   */
  readonly fields: FieldOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FieldOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends FormFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormFieldDefaultArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FieldOption model
   */
  interface FieldOptionFieldRefs {
    readonly id: FieldRef<"FieldOption", 'Int'>
    readonly label: FieldRef<"FieldOption", 'String'>
    readonly fieldId: FieldRef<"FieldOption", 'Int'>
    readonly createdAt: FieldRef<"FieldOption", 'DateTime'>
    readonly updatedAt: FieldRef<"FieldOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FieldOption findUnique
   */
  export type FieldOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOption to fetch.
     */
    where: FieldOptionWhereUniqueInput
  }

  /**
   * FieldOption findUniqueOrThrow
   */
  export type FieldOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOption to fetch.
     */
    where: FieldOptionWhereUniqueInput
  }

  /**
   * FieldOption findFirst
   */
  export type FieldOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOption to fetch.
     */
    where?: FieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldOptions to fetch.
     */
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldOptions.
     */
    cursor?: FieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldOptions.
     */
    distinct?: FieldOptionScalarFieldEnum | FieldOptionScalarFieldEnum[]
  }

  /**
   * FieldOption findFirstOrThrow
   */
  export type FieldOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOption to fetch.
     */
    where?: FieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldOptions to fetch.
     */
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldOptions.
     */
    cursor?: FieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldOptions.
     */
    distinct?: FieldOptionScalarFieldEnum | FieldOptionScalarFieldEnum[]
  }

  /**
   * FieldOption findMany
   */
  export type FieldOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOptions to fetch.
     */
    where?: FieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldOptions to fetch.
     */
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FieldOptions.
     */
    cursor?: FieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldOptions.
     */
    skip?: number
    distinct?: FieldOptionScalarFieldEnum | FieldOptionScalarFieldEnum[]
  }

  /**
   * FieldOption create
   */
  export type FieldOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a FieldOption.
     */
    data: XOR<FieldOptionCreateInput, FieldOptionUncheckedCreateInput>
  }

  /**
   * FieldOption createMany
   */
  export type FieldOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FieldOptions.
     */
    data: FieldOptionCreateManyInput | FieldOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FieldOption createManyAndReturn
   */
  export type FieldOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * The data used to create many FieldOptions.
     */
    data: FieldOptionCreateManyInput | FieldOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FieldOption update
   */
  export type FieldOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a FieldOption.
     */
    data: XOR<FieldOptionUpdateInput, FieldOptionUncheckedUpdateInput>
    /**
     * Choose, which FieldOption to update.
     */
    where: FieldOptionWhereUniqueInput
  }

  /**
   * FieldOption updateMany
   */
  export type FieldOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FieldOptions.
     */
    data: XOR<FieldOptionUpdateManyMutationInput, FieldOptionUncheckedUpdateManyInput>
    /**
     * Filter which FieldOptions to update
     */
    where?: FieldOptionWhereInput
    /**
     * Limit how many FieldOptions to update.
     */
    limit?: number
  }

  /**
   * FieldOption updateManyAndReturn
   */
  export type FieldOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * The data used to update FieldOptions.
     */
    data: XOR<FieldOptionUpdateManyMutationInput, FieldOptionUncheckedUpdateManyInput>
    /**
     * Filter which FieldOptions to update
     */
    where?: FieldOptionWhereInput
    /**
     * Limit how many FieldOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FieldOption upsert
   */
  export type FieldOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the FieldOption to update in case it exists.
     */
    where: FieldOptionWhereUniqueInput
    /**
     * In case the FieldOption found by the `where` argument doesn't exist, create a new FieldOption with this data.
     */
    create: XOR<FieldOptionCreateInput, FieldOptionUncheckedCreateInput>
    /**
     * In case the FieldOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldOptionUpdateInput, FieldOptionUncheckedUpdateInput>
  }

  /**
   * FieldOption delete
   */
  export type FieldOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter which FieldOption to delete.
     */
    where: FieldOptionWhereUniqueInput
  }

  /**
   * FieldOption deleteMany
   */
  export type FieldOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldOptions to delete
     */
    where?: FieldOptionWhereInput
    /**
     * Limit how many FieldOptions to delete.
     */
    limit?: number
  }

  /**
   * FieldOption without action
   */
  export type FieldOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
  }


  /**
   * Model FormSubmission
   */

  export type AggregateFormSubmission = {
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  export type FormSubmissionAvgAggregateOutputType = {
    id: number | null
    formId: number | null
  }

  export type FormSubmissionSumAggregateOutputType = {
    id: number | null
    formId: number | null
  }

  export type FormSubmissionMinAggregateOutputType = {
    id: number | null
    formId: number | null
    createdAt: Date | null
  }

  export type FormSubmissionMaxAggregateOutputType = {
    id: number | null
    formId: number | null
    createdAt: Date | null
  }

  export type FormSubmissionCountAggregateOutputType = {
    id: number
    formId: number
    createdAt: number
    _all: number
  }


  export type FormSubmissionAvgAggregateInputType = {
    id?: true
    formId?: true
  }

  export type FormSubmissionSumAggregateInputType = {
    id?: true
    formId?: true
  }

  export type FormSubmissionMinAggregateInputType = {
    id?: true
    formId?: true
    createdAt?: true
  }

  export type FormSubmissionMaxAggregateInputType = {
    id?: true
    formId?: true
    createdAt?: true
  }

  export type FormSubmissionCountAggregateInputType = {
    id?: true
    formId?: true
    createdAt?: true
    _all?: true
  }

  export type FormSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmission to aggregate.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormSubmissions
    **/
    _count?: true | FormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type GetFormSubmissionAggregateType<T extends FormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormSubmission[P]>
      : GetScalarType<T[P], AggregateFormSubmission[P]>
  }




  export type FormSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithAggregationInput | FormSubmissionOrderByWithAggregationInput[]
    by: FormSubmissionScalarFieldEnum[] | FormSubmissionScalarFieldEnum
    having?: FormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormSubmissionCountAggregateInputType | true
    _avg?: FormSubmissionAvgAggregateInputType
    _sum?: FormSubmissionSumAggregateInputType
    _min?: FormSubmissionMinAggregateInputType
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type FormSubmissionGroupByOutputType = {
    id: number
    formId: number
    createdAt: Date
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  type GetFormSubmissionGroupByPayload<T extends FormSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type FormSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    createdAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    responses?: boolean | FormSubmission$responsesArgs<ExtArgs>
    _count?: boolean | FormSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    createdAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    createdAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectScalar = {
    id?: boolean
    formId?: boolean
    createdAt?: boolean
  }

  export type FormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "createdAt", ExtArgs["result"]["formSubmission"]>
  export type FormSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    responses?: boolean | FormSubmission$responsesArgs<ExtArgs>
    _count?: boolean | FormSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }
  export type FormSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }

  export type $FormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormSubmission"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>
      responses: Prisma.$FieldResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      formId: number
      createdAt: Date
    }, ExtArgs["result"]["formSubmission"]>
    composites: {}
  }

  type FormSubmissionGetPayload<S extends boolean | null | undefined | FormSubmissionDefaultArgs> = $Result.GetResult<Prisma.$FormSubmissionPayload, S>

  type FormSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormSubmissionCountAggregateInputType | true
    }

  export interface FormSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormSubmission'], meta: { name: 'FormSubmission' } }
    /**
     * Find zero or one FormSubmission that matches the filter.
     * @param {FormSubmissionFindUniqueArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormSubmissionFindUniqueArgs>(args: SelectSubset<T, FormSubmissionFindUniqueArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormSubmissionFindUniqueOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, FormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormSubmissionFindFirstArgs>(args?: SelectSubset<T, FormSubmissionFindFirstArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, FormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany()
     * 
     * // Get first 10 FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormSubmissionFindManyArgs>(args?: SelectSubset<T, FormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormSubmission.
     * @param {FormSubmissionCreateArgs} args - Arguments to create a FormSubmission.
     * @example
     * // Create one FormSubmission
     * const FormSubmission = await prisma.formSubmission.create({
     *   data: {
     *     // ... data to create a FormSubmission
     *   }
     * })
     * 
     */
    create<T extends FormSubmissionCreateArgs>(args: SelectSubset<T, FormSubmissionCreateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormSubmissions.
     * @param {FormSubmissionCreateManyArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormSubmissionCreateManyArgs>(args?: SelectSubset<T, FormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormSubmissions and returns the data saved in the database.
     * @param {FormSubmissionCreateManyAndReturnArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, FormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormSubmission.
     * @param {FormSubmissionDeleteArgs} args - Arguments to delete one FormSubmission.
     * @example
     * // Delete one FormSubmission
     * const FormSubmission = await prisma.formSubmission.delete({
     *   where: {
     *     // ... filter to delete one FormSubmission
     *   }
     * })
     * 
     */
    delete<T extends FormSubmissionDeleteArgs>(args: SelectSubset<T, FormSubmissionDeleteArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormSubmission.
     * @param {FormSubmissionUpdateArgs} args - Arguments to update one FormSubmission.
     * @example
     * // Update one FormSubmission
     * const formSubmission = await prisma.formSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormSubmissionUpdateArgs>(args: SelectSubset<T, FormSubmissionUpdateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormSubmissions.
     * @param {FormSubmissionDeleteManyArgs} args - Arguments to filter FormSubmissions to delete.
     * @example
     * // Delete a few FormSubmissions
     * const { count } = await prisma.formSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormSubmissionDeleteManyArgs>(args?: SelectSubset<T, FormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormSubmissionUpdateManyArgs>(args: SelectSubset<T, FormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions and returns the data updated in the database.
     * @param {FormSubmissionUpdateManyAndReturnArgs} args - Arguments to update many FormSubmissions.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, FormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormSubmission.
     * @param {FormSubmissionUpsertArgs} args - Arguments to update or create a FormSubmission.
     * @example
     * // Update or create a FormSubmission
     * const formSubmission = await prisma.formSubmission.upsert({
     *   create: {
     *     // ... data to create a FormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormSubmission we want to update
     *   }
     * })
     */
    upsert<T extends FormSubmissionUpsertArgs>(args: SelectSubset<T, FormSubmissionUpsertArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionCountArgs} args - Arguments to filter FormSubmissions to count.
     * @example
     * // Count the number of FormSubmissions
     * const count = await prisma.formSubmission.count({
     *   where: {
     *     // ... the filter for the FormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends FormSubmissionCountArgs>(
      args?: Subset<T, FormSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormSubmissionAggregateArgs>(args: Subset<T, FormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetFormSubmissionAggregateType<T>>

    /**
     * Group by FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionGroupByArgs} args - Group by arguments.
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
      T extends FormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: FormSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormSubmission model
   */
  readonly fields: FormSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends FormSubmission$responsesArgs<ExtArgs> = {}>(args?: Subset<T, FormSubmission$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FormSubmission model
   */
  interface FormSubmissionFieldRefs {
    readonly id: FieldRef<"FormSubmission", 'Int'>
    readonly formId: FieldRef<"FormSubmission", 'Int'>
    readonly createdAt: FieldRef<"FormSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormSubmission findUnique
   */
  export type FormSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findUniqueOrThrow
   */
  export type FormSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findFirst
   */
  export type FormSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findFirstOrThrow
   */
  export type FormSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findMany
   */
  export type FormSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmissions to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission create
   */
  export type FormSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a FormSubmission.
     */
    data: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
  }

  /**
   * FormSubmission createMany
   */
  export type FormSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmission createManyAndReturn
   */
  export type FormSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormSubmission update
   */
  export type FormSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a FormSubmission.
     */
    data: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which FormSubmission to update.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission updateMany
   */
  export type FormSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
  }

  /**
   * FormSubmission updateManyAndReturn
   */
  export type FormSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormSubmission upsert
   */
  export type FormSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the FormSubmission to update in case it exists.
     */
    where: FormSubmissionWhereUniqueInput
    /**
     * In case the FormSubmission found by the `where` argument doesn't exist, create a new FormSubmission with this data.
     */
    create: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
    /**
     * In case the FormSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
  }

  /**
   * FormSubmission delete
   */
  export type FormSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter which FormSubmission to delete.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission deleteMany
   */
  export type FormSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmissions to delete
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to delete.
     */
    limit?: number
  }

  /**
   * FormSubmission.responses
   */
  export type FormSubmission$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    where?: FieldResponseWhereInput
    orderBy?: FieldResponseOrderByWithRelationInput | FieldResponseOrderByWithRelationInput[]
    cursor?: FieldResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldResponseScalarFieldEnum | FieldResponseScalarFieldEnum[]
  }

  /**
   * FormSubmission without action
   */
  export type FormSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model FieldResponse
   */

  export type AggregateFieldResponse = {
    _count: FieldResponseCountAggregateOutputType | null
    _avg: FieldResponseAvgAggregateOutputType | null
    _sum: FieldResponseSumAggregateOutputType | null
    _min: FieldResponseMinAggregateOutputType | null
    _max: FieldResponseMaxAggregateOutputType | null
  }

  export type FieldResponseAvgAggregateOutputType = {
    submissionId: number | null
    fieldId: number | null
  }

  export type FieldResponseSumAggregateOutputType = {
    submissionId: number | null
    fieldId: number | null
  }

  export type FieldResponseMinAggregateOutputType = {
    id: string | null
    submissionId: number | null
    fieldId: number | null
    textValue: string | null
    selectedOption: string | null
    createdAt: Date | null
  }

  export type FieldResponseMaxAggregateOutputType = {
    id: string | null
    submissionId: number | null
    fieldId: number | null
    textValue: string | null
    selectedOption: string | null
    createdAt: Date | null
  }

  export type FieldResponseCountAggregateOutputType = {
    id: number
    submissionId: number
    fieldId: number
    textValue: number
    selectedOption: number
    selectedOptions: number
    tableValue: number
    createdAt: number
    _all: number
  }


  export type FieldResponseAvgAggregateInputType = {
    submissionId?: true
    fieldId?: true
  }

  export type FieldResponseSumAggregateInputType = {
    submissionId?: true
    fieldId?: true
  }

  export type FieldResponseMinAggregateInputType = {
    id?: true
    submissionId?: true
    fieldId?: true
    textValue?: true
    selectedOption?: true
    createdAt?: true
  }

  export type FieldResponseMaxAggregateInputType = {
    id?: true
    submissionId?: true
    fieldId?: true
    textValue?: true
    selectedOption?: true
    createdAt?: true
  }

  export type FieldResponseCountAggregateInputType = {
    id?: true
    submissionId?: true
    fieldId?: true
    textValue?: true
    selectedOption?: true
    selectedOptions?: true
    tableValue?: true
    createdAt?: true
    _all?: true
  }

  export type FieldResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldResponse to aggregate.
     */
    where?: FieldResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldResponses to fetch.
     */
    orderBy?: FieldResponseOrderByWithRelationInput | FieldResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FieldResponses
    **/
    _count?: true | FieldResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldResponseMaxAggregateInputType
  }

  export type GetFieldResponseAggregateType<T extends FieldResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldResponse[P]>
      : GetScalarType<T[P], AggregateFieldResponse[P]>
  }




  export type FieldResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldResponseWhereInput
    orderBy?: FieldResponseOrderByWithAggregationInput | FieldResponseOrderByWithAggregationInput[]
    by: FieldResponseScalarFieldEnum[] | FieldResponseScalarFieldEnum
    having?: FieldResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldResponseCountAggregateInputType | true
    _avg?: FieldResponseAvgAggregateInputType
    _sum?: FieldResponseSumAggregateInputType
    _min?: FieldResponseMinAggregateInputType
    _max?: FieldResponseMaxAggregateInputType
  }

  export type FieldResponseGroupByOutputType = {
    id: string
    submissionId: number
    fieldId: number
    textValue: string | null
    selectedOption: string | null
    selectedOptions: string[]
    tableValue: JsonValue | null
    createdAt: Date
    _count: FieldResponseCountAggregateOutputType | null
    _avg: FieldResponseAvgAggregateOutputType | null
    _sum: FieldResponseSumAggregateOutputType | null
    _min: FieldResponseMinAggregateOutputType | null
    _max: FieldResponseMaxAggregateOutputType | null
  }

  type GetFieldResponseGroupByPayload<T extends FieldResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldResponseGroupByOutputType[P]>
            : GetScalarType<T[P], FieldResponseGroupByOutputType[P]>
        }
      >
    >


  export type FieldResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    fieldId?: boolean
    textValue?: boolean
    selectedOption?: boolean
    selectedOptions?: boolean
    tableValue?: boolean
    createdAt?: boolean
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldResponse"]>

  export type FieldResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    fieldId?: boolean
    textValue?: boolean
    selectedOption?: boolean
    selectedOptions?: boolean
    tableValue?: boolean
    createdAt?: boolean
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldResponse"]>

  export type FieldResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    fieldId?: boolean
    textValue?: boolean
    selectedOption?: boolean
    selectedOptions?: boolean
    tableValue?: boolean
    createdAt?: boolean
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldResponse"]>

  export type FieldResponseSelectScalar = {
    id?: boolean
    submissionId?: boolean
    fieldId?: boolean
    textValue?: boolean
    selectedOption?: boolean
    selectedOptions?: boolean
    tableValue?: boolean
    createdAt?: boolean
  }

  export type FieldResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "fieldId" | "textValue" | "selectedOption" | "selectedOptions" | "tableValue" | "createdAt", ExtArgs["result"]["fieldResponse"]>
  export type FieldResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }
  export type FieldResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }
  export type FieldResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | FormSubmissionDefaultArgs<ExtArgs>
    field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }

  export type $FieldResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FieldResponse"
    objects: {
      submission: Prisma.$FormSubmissionPayload<ExtArgs>
      field: Prisma.$FormFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: number
      fieldId: number
      textValue: string | null
      selectedOption: string | null
      selectedOptions: string[]
      tableValue: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["fieldResponse"]>
    composites: {}
  }

  type FieldResponseGetPayload<S extends boolean | null | undefined | FieldResponseDefaultArgs> = $Result.GetResult<Prisma.$FieldResponsePayload, S>

  type FieldResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldResponseCountAggregateInputType | true
    }

  export interface FieldResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FieldResponse'], meta: { name: 'FieldResponse' } }
    /**
     * Find zero or one FieldResponse that matches the filter.
     * @param {FieldResponseFindUniqueArgs} args - Arguments to find a FieldResponse
     * @example
     * // Get one FieldResponse
     * const fieldResponse = await prisma.fieldResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldResponseFindUniqueArgs>(args: SelectSubset<T, FieldResponseFindUniqueArgs<ExtArgs>>): Prisma__FieldResponseClient<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FieldResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldResponseFindUniqueOrThrowArgs} args - Arguments to find a FieldResponse
     * @example
     * // Get one FieldResponse
     * const fieldResponse = await prisma.fieldResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldResponseClient<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldResponseFindFirstArgs} args - Arguments to find a FieldResponse
     * @example
     * // Get one FieldResponse
     * const fieldResponse = await prisma.fieldResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldResponseFindFirstArgs>(args?: SelectSubset<T, FieldResponseFindFirstArgs<ExtArgs>>): Prisma__FieldResponseClient<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldResponseFindFirstOrThrowArgs} args - Arguments to find a FieldResponse
     * @example
     * // Get one FieldResponse
     * const fieldResponse = await prisma.fieldResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldResponseClient<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FieldResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FieldResponses
     * const fieldResponses = await prisma.fieldResponse.findMany()
     * 
     * // Get first 10 FieldResponses
     * const fieldResponses = await prisma.fieldResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldResponseWithIdOnly = await prisma.fieldResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldResponseFindManyArgs>(args?: SelectSubset<T, FieldResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FieldResponse.
     * @param {FieldResponseCreateArgs} args - Arguments to create a FieldResponse.
     * @example
     * // Create one FieldResponse
     * const FieldResponse = await prisma.fieldResponse.create({
     *   data: {
     *     // ... data to create a FieldResponse
     *   }
     * })
     * 
     */
    create<T extends FieldResponseCreateArgs>(args: SelectSubset<T, FieldResponseCreateArgs<ExtArgs>>): Prisma__FieldResponseClient<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FieldResponses.
     * @param {FieldResponseCreateManyArgs} args - Arguments to create many FieldResponses.
     * @example
     * // Create many FieldResponses
     * const fieldResponse = await prisma.fieldResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldResponseCreateManyArgs>(args?: SelectSubset<T, FieldResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FieldResponses and returns the data saved in the database.
     * @param {FieldResponseCreateManyAndReturnArgs} args - Arguments to create many FieldResponses.
     * @example
     * // Create many FieldResponses
     * const fieldResponse = await prisma.fieldResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FieldResponses and only return the `id`
     * const fieldResponseWithIdOnly = await prisma.fieldResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FieldResponse.
     * @param {FieldResponseDeleteArgs} args - Arguments to delete one FieldResponse.
     * @example
     * // Delete one FieldResponse
     * const FieldResponse = await prisma.fieldResponse.delete({
     *   where: {
     *     // ... filter to delete one FieldResponse
     *   }
     * })
     * 
     */
    delete<T extends FieldResponseDeleteArgs>(args: SelectSubset<T, FieldResponseDeleteArgs<ExtArgs>>): Prisma__FieldResponseClient<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FieldResponse.
     * @param {FieldResponseUpdateArgs} args - Arguments to update one FieldResponse.
     * @example
     * // Update one FieldResponse
     * const fieldResponse = await prisma.fieldResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldResponseUpdateArgs>(args: SelectSubset<T, FieldResponseUpdateArgs<ExtArgs>>): Prisma__FieldResponseClient<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FieldResponses.
     * @param {FieldResponseDeleteManyArgs} args - Arguments to filter FieldResponses to delete.
     * @example
     * // Delete a few FieldResponses
     * const { count } = await prisma.fieldResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldResponseDeleteManyArgs>(args?: SelectSubset<T, FieldResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FieldResponses
     * const fieldResponse = await prisma.fieldResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldResponseUpdateManyArgs>(args: SelectSubset<T, FieldResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldResponses and returns the data updated in the database.
     * @param {FieldResponseUpdateManyAndReturnArgs} args - Arguments to update many FieldResponses.
     * @example
     * // Update many FieldResponses
     * const fieldResponse = await prisma.fieldResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FieldResponses and only return the `id`
     * const fieldResponseWithIdOnly = await prisma.fieldResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FieldResponse.
     * @param {FieldResponseUpsertArgs} args - Arguments to update or create a FieldResponse.
     * @example
     * // Update or create a FieldResponse
     * const fieldResponse = await prisma.fieldResponse.upsert({
     *   create: {
     *     // ... data to create a FieldResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FieldResponse we want to update
     *   }
     * })
     */
    upsert<T extends FieldResponseUpsertArgs>(args: SelectSubset<T, FieldResponseUpsertArgs<ExtArgs>>): Prisma__FieldResponseClient<$Result.GetResult<Prisma.$FieldResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FieldResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldResponseCountArgs} args - Arguments to filter FieldResponses to count.
     * @example
     * // Count the number of FieldResponses
     * const count = await prisma.fieldResponse.count({
     *   where: {
     *     // ... the filter for the FieldResponses we want to count
     *   }
     * })
    **/
    count<T extends FieldResponseCountArgs>(
      args?: Subset<T, FieldResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FieldResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FieldResponseAggregateArgs>(args: Subset<T, FieldResponseAggregateArgs>): Prisma.PrismaPromise<GetFieldResponseAggregateType<T>>

    /**
     * Group by FieldResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldResponseGroupByArgs} args - Group by arguments.
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
      T extends FieldResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldResponseGroupByArgs['orderBy'] }
        : { orderBy?: FieldResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FieldResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FieldResponse model
   */
  readonly fields: FieldResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FieldResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends FormSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormSubmissionDefaultArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends FormFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormFieldDefaultArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FieldResponse model
   */
  interface FieldResponseFieldRefs {
    readonly id: FieldRef<"FieldResponse", 'String'>
    readonly submissionId: FieldRef<"FieldResponse", 'Int'>
    readonly fieldId: FieldRef<"FieldResponse", 'Int'>
    readonly textValue: FieldRef<"FieldResponse", 'String'>
    readonly selectedOption: FieldRef<"FieldResponse", 'String'>
    readonly selectedOptions: FieldRef<"FieldResponse", 'String[]'>
    readonly tableValue: FieldRef<"FieldResponse", 'Json'>
    readonly createdAt: FieldRef<"FieldResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FieldResponse findUnique
   */
  export type FieldResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * Filter, which FieldResponse to fetch.
     */
    where: FieldResponseWhereUniqueInput
  }

  /**
   * FieldResponse findUniqueOrThrow
   */
  export type FieldResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * Filter, which FieldResponse to fetch.
     */
    where: FieldResponseWhereUniqueInput
  }

  /**
   * FieldResponse findFirst
   */
  export type FieldResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * Filter, which FieldResponse to fetch.
     */
    where?: FieldResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldResponses to fetch.
     */
    orderBy?: FieldResponseOrderByWithRelationInput | FieldResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldResponses.
     */
    cursor?: FieldResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldResponses.
     */
    distinct?: FieldResponseScalarFieldEnum | FieldResponseScalarFieldEnum[]
  }

  /**
   * FieldResponse findFirstOrThrow
   */
  export type FieldResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * Filter, which FieldResponse to fetch.
     */
    where?: FieldResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldResponses to fetch.
     */
    orderBy?: FieldResponseOrderByWithRelationInput | FieldResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldResponses.
     */
    cursor?: FieldResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldResponses.
     */
    distinct?: FieldResponseScalarFieldEnum | FieldResponseScalarFieldEnum[]
  }

  /**
   * FieldResponse findMany
   */
  export type FieldResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * Filter, which FieldResponses to fetch.
     */
    where?: FieldResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldResponses to fetch.
     */
    orderBy?: FieldResponseOrderByWithRelationInput | FieldResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FieldResponses.
     */
    cursor?: FieldResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldResponses.
     */
    skip?: number
    distinct?: FieldResponseScalarFieldEnum | FieldResponseScalarFieldEnum[]
  }

  /**
   * FieldResponse create
   */
  export type FieldResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a FieldResponse.
     */
    data: XOR<FieldResponseCreateInput, FieldResponseUncheckedCreateInput>
  }

  /**
   * FieldResponse createMany
   */
  export type FieldResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FieldResponses.
     */
    data: FieldResponseCreateManyInput | FieldResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FieldResponse createManyAndReturn
   */
  export type FieldResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * The data used to create many FieldResponses.
     */
    data: FieldResponseCreateManyInput | FieldResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FieldResponse update
   */
  export type FieldResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a FieldResponse.
     */
    data: XOR<FieldResponseUpdateInput, FieldResponseUncheckedUpdateInput>
    /**
     * Choose, which FieldResponse to update.
     */
    where: FieldResponseWhereUniqueInput
  }

  /**
   * FieldResponse updateMany
   */
  export type FieldResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FieldResponses.
     */
    data: XOR<FieldResponseUpdateManyMutationInput, FieldResponseUncheckedUpdateManyInput>
    /**
     * Filter which FieldResponses to update
     */
    where?: FieldResponseWhereInput
    /**
     * Limit how many FieldResponses to update.
     */
    limit?: number
  }

  /**
   * FieldResponse updateManyAndReturn
   */
  export type FieldResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * The data used to update FieldResponses.
     */
    data: XOR<FieldResponseUpdateManyMutationInput, FieldResponseUncheckedUpdateManyInput>
    /**
     * Filter which FieldResponses to update
     */
    where?: FieldResponseWhereInput
    /**
     * Limit how many FieldResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FieldResponse upsert
   */
  export type FieldResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the FieldResponse to update in case it exists.
     */
    where: FieldResponseWhereUniqueInput
    /**
     * In case the FieldResponse found by the `where` argument doesn't exist, create a new FieldResponse with this data.
     */
    create: XOR<FieldResponseCreateInput, FieldResponseUncheckedCreateInput>
    /**
     * In case the FieldResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldResponseUpdateInput, FieldResponseUncheckedUpdateInput>
  }

  /**
   * FieldResponse delete
   */
  export type FieldResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
    /**
     * Filter which FieldResponse to delete.
     */
    where: FieldResponseWhereUniqueInput
  }

  /**
   * FieldResponse deleteMany
   */
  export type FieldResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldResponses to delete
     */
    where?: FieldResponseWhereInput
    /**
     * Limit how many FieldResponses to delete.
     */
    limit?: number
  }

  /**
   * FieldResponse without action
   */
  export type FieldResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldResponse
     */
    select?: FieldResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldResponse
     */
    omit?: FieldResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldResponseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    formName: 'formName',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const FormFieldScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    order: 'order',
    type: 'type',
    label: 'label',
    required: 'required',
    placeholder: 'placeholder',
    multiline: 'multiline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormFieldScalarFieldEnum = (typeof FormFieldScalarFieldEnum)[keyof typeof FormFieldScalarFieldEnum]


  export const FieldOptionScalarFieldEnum: {
    id: 'id',
    label: 'label',
    fieldId: 'fieldId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FieldOptionScalarFieldEnum = (typeof FieldOptionScalarFieldEnum)[keyof typeof FieldOptionScalarFieldEnum]


  export const FormSubmissionScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    createdAt: 'createdAt'
  };

  export type FormSubmissionScalarFieldEnum = (typeof FormSubmissionScalarFieldEnum)[keyof typeof FormSubmissionScalarFieldEnum]


  export const FieldResponseScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    fieldId: 'fieldId',
    textValue: 'textValue',
    selectedOption: 'selectedOption',
    selectedOptions: 'selectedOptions',
    tableValue: 'tableValue',
    createdAt: 'createdAt'
  };

  export type FieldResponseScalarFieldEnum = (typeof FieldResponseScalarFieldEnum)[keyof typeof FieldResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FieldType'
   */
  export type EnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType'>
    


  /**
   * Reference to a field of type 'FieldType[]'
   */
  export type ListEnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: IntFilter<"Form"> | number
    formName?: StringFilter<"Form"> | string
    description?: StringFilter<"Form"> | string
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    fields?: FormFieldListRelationFilter
    submissions?: FormSubmissionListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    formName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fields?: FormFieldOrderByRelationAggregateInput
    submissions?: FormSubmissionOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    formName?: StringFilter<"Form"> | string
    description?: StringFilter<"Form"> | string
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    fields?: FormFieldListRelationFilter
    submissions?: FormSubmissionListRelationFilter
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    formName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _avg?: FormAvgOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
    _sum?: FormSumOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Form"> | number
    formName?: StringWithAggregatesFilter<"Form"> | string
    description?: StringWithAggregatesFilter<"Form"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
  }

  export type FormFieldWhereInput = {
    AND?: FormFieldWhereInput | FormFieldWhereInput[]
    OR?: FormFieldWhereInput[]
    NOT?: FormFieldWhereInput | FormFieldWhereInput[]
    id?: IntFilter<"FormField"> | number
    formId?: IntFilter<"FormField"> | number
    order?: IntFilter<"FormField"> | number
    type?: EnumFieldTypeFilter<"FormField"> | $Enums.FieldType
    label?: StringFilter<"FormField"> | string
    required?: BoolFilter<"FormField"> | boolean
    placeholder?: StringNullableFilter<"FormField"> | string | null
    multiline?: BoolNullableFilter<"FormField"> | boolean | null
    createdAt?: DateTimeFilter<"FormField"> | Date | string
    updatedAt?: DateTimeFilter<"FormField"> | Date | string
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    responses?: FieldResponseListRelationFilter
    options?: FieldOptionListRelationFilter
  }

  export type FormFieldOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    required?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    multiline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    form?: FormOrderByWithRelationInput
    responses?: FieldResponseOrderByRelationAggregateInput
    options?: FieldOptionOrderByRelationAggregateInput
  }

  export type FormFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormFieldWhereInput | FormFieldWhereInput[]
    OR?: FormFieldWhereInput[]
    NOT?: FormFieldWhereInput | FormFieldWhereInput[]
    formId?: IntFilter<"FormField"> | number
    order?: IntFilter<"FormField"> | number
    type?: EnumFieldTypeFilter<"FormField"> | $Enums.FieldType
    label?: StringFilter<"FormField"> | string
    required?: BoolFilter<"FormField"> | boolean
    placeholder?: StringNullableFilter<"FormField"> | string | null
    multiline?: BoolNullableFilter<"FormField"> | boolean | null
    createdAt?: DateTimeFilter<"FormField"> | Date | string
    updatedAt?: DateTimeFilter<"FormField"> | Date | string
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    responses?: FieldResponseListRelationFilter
    options?: FieldOptionListRelationFilter
  }, "id">

  export type FormFieldOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    required?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    multiline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormFieldCountOrderByAggregateInput
    _avg?: FormFieldAvgOrderByAggregateInput
    _max?: FormFieldMaxOrderByAggregateInput
    _min?: FormFieldMinOrderByAggregateInput
    _sum?: FormFieldSumOrderByAggregateInput
  }

  export type FormFieldScalarWhereWithAggregatesInput = {
    AND?: FormFieldScalarWhereWithAggregatesInput | FormFieldScalarWhereWithAggregatesInput[]
    OR?: FormFieldScalarWhereWithAggregatesInput[]
    NOT?: FormFieldScalarWhereWithAggregatesInput | FormFieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormField"> | number
    formId?: IntWithAggregatesFilter<"FormField"> | number
    order?: IntWithAggregatesFilter<"FormField"> | number
    type?: EnumFieldTypeWithAggregatesFilter<"FormField"> | $Enums.FieldType
    label?: StringWithAggregatesFilter<"FormField"> | string
    required?: BoolWithAggregatesFilter<"FormField"> | boolean
    placeholder?: StringNullableWithAggregatesFilter<"FormField"> | string | null
    multiline?: BoolNullableWithAggregatesFilter<"FormField"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"FormField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormField"> | Date | string
  }

  export type FieldOptionWhereInput = {
    AND?: FieldOptionWhereInput | FieldOptionWhereInput[]
    OR?: FieldOptionWhereInput[]
    NOT?: FieldOptionWhereInput | FieldOptionWhereInput[]
    id?: IntFilter<"FieldOption"> | number
    label?: StringFilter<"FieldOption"> | string
    fieldId?: IntFilter<"FieldOption"> | number
    createdAt?: DateTimeFilter<"FieldOption"> | Date | string
    updatedAt?: DateTimeFilter<"FieldOption"> | Date | string
    field?: XOR<FormFieldScalarRelationFilter, FormFieldWhereInput>
  }

  export type FieldOptionOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    field?: FormFieldOrderByWithRelationInput
  }

  export type FieldOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FieldOptionWhereInput | FieldOptionWhereInput[]
    OR?: FieldOptionWhereInput[]
    NOT?: FieldOptionWhereInput | FieldOptionWhereInput[]
    label?: StringFilter<"FieldOption"> | string
    fieldId?: IntFilter<"FieldOption"> | number
    createdAt?: DateTimeFilter<"FieldOption"> | Date | string
    updatedAt?: DateTimeFilter<"FieldOption"> | Date | string
    field?: XOR<FormFieldScalarRelationFilter, FormFieldWhereInput>
  }, "id">

  export type FieldOptionOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FieldOptionCountOrderByAggregateInput
    _avg?: FieldOptionAvgOrderByAggregateInput
    _max?: FieldOptionMaxOrderByAggregateInput
    _min?: FieldOptionMinOrderByAggregateInput
    _sum?: FieldOptionSumOrderByAggregateInput
  }

  export type FieldOptionScalarWhereWithAggregatesInput = {
    AND?: FieldOptionScalarWhereWithAggregatesInput | FieldOptionScalarWhereWithAggregatesInput[]
    OR?: FieldOptionScalarWhereWithAggregatesInput[]
    NOT?: FieldOptionScalarWhereWithAggregatesInput | FieldOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FieldOption"> | number
    label?: StringWithAggregatesFilter<"FieldOption"> | string
    fieldId?: IntWithAggregatesFilter<"FieldOption"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FieldOption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FieldOption"> | Date | string
  }

  export type FormSubmissionWhereInput = {
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    id?: IntFilter<"FormSubmission"> | number
    formId?: IntFilter<"FormSubmission"> | number
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    responses?: FieldResponseListRelationFilter
  }

  export type FormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    form?: FormOrderByWithRelationInput
    responses?: FieldResponseOrderByRelationAggregateInput
  }

  export type FormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    formId?: IntFilter<"FormSubmission"> | number
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    responses?: FieldResponseListRelationFilter
  }, "id">

  export type FormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
    _count?: FormSubmissionCountOrderByAggregateInput
    _avg?: FormSubmissionAvgOrderByAggregateInput
    _max?: FormSubmissionMaxOrderByAggregateInput
    _min?: FormSubmissionMinOrderByAggregateInput
    _sum?: FormSubmissionSumOrderByAggregateInput
  }

  export type FormSubmissionScalarWhereWithAggregatesInput = {
    AND?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    OR?: FormSubmissionScalarWhereWithAggregatesInput[]
    NOT?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormSubmission"> | number
    formId?: IntWithAggregatesFilter<"FormSubmission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
  }

  export type FieldResponseWhereInput = {
    AND?: FieldResponseWhereInput | FieldResponseWhereInput[]
    OR?: FieldResponseWhereInput[]
    NOT?: FieldResponseWhereInput | FieldResponseWhereInput[]
    id?: StringFilter<"FieldResponse"> | string
    submissionId?: IntFilter<"FieldResponse"> | number
    fieldId?: IntFilter<"FieldResponse"> | number
    textValue?: StringNullableFilter<"FieldResponse"> | string | null
    selectedOption?: StringNullableFilter<"FieldResponse"> | string | null
    selectedOptions?: StringNullableListFilter<"FieldResponse">
    tableValue?: JsonNullableFilter<"FieldResponse">
    createdAt?: DateTimeFilter<"FieldResponse"> | Date | string
    submission?: XOR<FormSubmissionScalarRelationFilter, FormSubmissionWhereInput>
    field?: XOR<FormFieldScalarRelationFilter, FormFieldWhereInput>
  }

  export type FieldResponseOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    fieldId?: SortOrder
    textValue?: SortOrderInput | SortOrder
    selectedOption?: SortOrderInput | SortOrder
    selectedOptions?: SortOrder
    tableValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    submission?: FormSubmissionOrderByWithRelationInput
    field?: FormFieldOrderByWithRelationInput
  }

  export type FieldResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FieldResponseWhereInput | FieldResponseWhereInput[]
    OR?: FieldResponseWhereInput[]
    NOT?: FieldResponseWhereInput | FieldResponseWhereInput[]
    submissionId?: IntFilter<"FieldResponse"> | number
    fieldId?: IntFilter<"FieldResponse"> | number
    textValue?: StringNullableFilter<"FieldResponse"> | string | null
    selectedOption?: StringNullableFilter<"FieldResponse"> | string | null
    selectedOptions?: StringNullableListFilter<"FieldResponse">
    tableValue?: JsonNullableFilter<"FieldResponse">
    createdAt?: DateTimeFilter<"FieldResponse"> | Date | string
    submission?: XOR<FormSubmissionScalarRelationFilter, FormSubmissionWhereInput>
    field?: XOR<FormFieldScalarRelationFilter, FormFieldWhereInput>
  }, "id">

  export type FieldResponseOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    fieldId?: SortOrder
    textValue?: SortOrderInput | SortOrder
    selectedOption?: SortOrderInput | SortOrder
    selectedOptions?: SortOrder
    tableValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FieldResponseCountOrderByAggregateInput
    _avg?: FieldResponseAvgOrderByAggregateInput
    _max?: FieldResponseMaxOrderByAggregateInput
    _min?: FieldResponseMinOrderByAggregateInput
    _sum?: FieldResponseSumOrderByAggregateInput
  }

  export type FieldResponseScalarWhereWithAggregatesInput = {
    AND?: FieldResponseScalarWhereWithAggregatesInput | FieldResponseScalarWhereWithAggregatesInput[]
    OR?: FieldResponseScalarWhereWithAggregatesInput[]
    NOT?: FieldResponseScalarWhereWithAggregatesInput | FieldResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FieldResponse"> | string
    submissionId?: IntWithAggregatesFilter<"FieldResponse"> | number
    fieldId?: IntWithAggregatesFilter<"FieldResponse"> | number
    textValue?: StringNullableWithAggregatesFilter<"FieldResponse"> | string | null
    selectedOption?: StringNullableWithAggregatesFilter<"FieldResponse"> | string | null
    selectedOptions?: StringNullableListFilter<"FieldResponse">
    tableValue?: JsonNullableWithAggregatesFilter<"FieldResponse">
    createdAt?: DateTimeWithAggregatesFilter<"FieldResponse"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FormCreateInput = {
    formName: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FormFieldCreateNestedManyWithoutFormInput
    submissions?: FormSubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: number
    formName: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FormFieldUncheckedCreateNestedManyWithoutFormInput
    submissions?: FormSubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    formName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FormFieldUpdateManyWithoutFormNestedInput
    submissions?: FormSubmissionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    formName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FormFieldUncheckedUpdateManyWithoutFormNestedInput
    submissions?: FormSubmissionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: number
    formName: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormUpdateManyMutationInput = {
    formName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    formName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormFieldCreateInput = {
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutFieldsInput
    responses?: FieldResponseCreateNestedManyWithoutFieldInput
    options?: FieldOptionCreateNestedManyWithoutFieldInput
  }

  export type FormFieldUncheckedCreateInput = {
    id?: number
    formId: number
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: FieldResponseUncheckedCreateNestedManyWithoutFieldInput
    options?: FieldOptionUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FormFieldUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutFieldsNestedInput
    responses?: FieldResponseUpdateManyWithoutFieldNestedInput
    options?: FieldOptionUpdateManyWithoutFieldNestedInput
  }

  export type FormFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    formId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FieldResponseUncheckedUpdateManyWithoutFieldNestedInput
    options?: FieldOptionUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FormFieldCreateManyInput = {
    id?: number
    formId: number
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormFieldUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    formId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionCreateInput = {
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    field: FormFieldCreateNestedOneWithoutOptionsInput
  }

  export type FieldOptionUncheckedCreateInput = {
    id?: number
    label: string
    fieldId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldOptionUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FormFieldUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type FieldOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    fieldId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionCreateManyInput = {
    id?: number
    label: string
    fieldId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldOptionUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    fieldId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateInput = {
    createdAt?: Date | string
    form: FormCreateNestedOneWithoutSubmissionsInput
    responses?: FieldResponseCreateNestedManyWithoutSubmissionInput
  }

  export type FormSubmissionUncheckedCreateInput = {
    id?: number
    formId: number
    createdAt?: Date | string
    responses?: FieldResponseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type FormSubmissionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutSubmissionsNestedInput
    responses?: FieldResponseUpdateManyWithoutSubmissionNestedInput
  }

  export type FormSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    formId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FieldResponseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type FormSubmissionCreateManyInput = {
    id?: number
    formId: number
    createdAt?: Date | string
  }

  export type FormSubmissionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    formId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldResponseCreateInput = {
    id?: string
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submission: FormSubmissionCreateNestedOneWithoutResponsesInput
    field: FormFieldCreateNestedOneWithoutResponsesInput
  }

  export type FieldResponseUncheckedCreateInput = {
    id?: string
    submissionId: number
    fieldId: number
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FieldResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: FormSubmissionUpdateOneRequiredWithoutResponsesNestedInput
    field?: FormFieldUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type FieldResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: IntFieldUpdateOperationsInput | number
    fieldId?: IntFieldUpdateOperationsInput | number
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldResponseCreateManyInput = {
    id?: string
    submissionId: number
    fieldId: number
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FieldResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: IntFieldUpdateOperationsInput | number
    fieldId?: IntFieldUpdateOperationsInput | number
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FormFieldListRelationFilter = {
    every?: FormFieldWhereInput
    some?: FormFieldWhereInput
    none?: FormFieldWhereInput
  }

  export type FormSubmissionListRelationFilter = {
    every?: FormSubmissionWhereInput
    some?: FormSubmissionWhereInput
    none?: FormSubmissionWhereInput
  }

  export type FormFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    formName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    formName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    formName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FormScalarRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type FieldResponseListRelationFilter = {
    every?: FieldResponseWhereInput
    some?: FieldResponseWhereInput
    none?: FieldResponseWhereInput
  }

  export type FieldOptionListRelationFilter = {
    every?: FieldOptionWhereInput
    some?: FieldOptionWhereInput
    none?: FieldOptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FieldResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormFieldCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    required?: SortOrder
    placeholder?: SortOrder
    multiline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    order?: SortOrder
  }

  export type FormFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    required?: SortOrder
    placeholder?: SortOrder
    multiline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormFieldMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    required?: SortOrder
    placeholder?: SortOrder
    multiline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormFieldSumOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    order?: SortOrder
  }

  export type EnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FormFieldScalarRelationFilter = {
    is?: FormFieldWhereInput
    isNot?: FormFieldWhereInput
  }

  export type FieldOptionCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
  }

  export type FieldOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldOptionMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldOptionSumOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
  }

  export type FormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
  }

  export type FormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FormSubmissionScalarRelationFilter = {
    is?: FormSubmissionWhereInput
    isNot?: FormSubmissionWhereInput
  }

  export type FieldResponseCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    fieldId?: SortOrder
    textValue?: SortOrder
    selectedOption?: SortOrder
    selectedOptions?: SortOrder
    tableValue?: SortOrder
    createdAt?: SortOrder
  }

  export type FieldResponseAvgOrderByAggregateInput = {
    submissionId?: SortOrder
    fieldId?: SortOrder
  }

  export type FieldResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    fieldId?: SortOrder
    textValue?: SortOrder
    selectedOption?: SortOrder
    createdAt?: SortOrder
  }

  export type FieldResponseMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    fieldId?: SortOrder
    textValue?: SortOrder
    selectedOption?: SortOrder
    createdAt?: SortOrder
  }

  export type FieldResponseSumOrderByAggregateInput = {
    submissionId?: SortOrder
    fieldId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FormFieldCreateNestedManyWithoutFormInput = {
    create?: XOR<FormFieldCreateWithoutFormInput, FormFieldUncheckedCreateWithoutFormInput> | FormFieldCreateWithoutFormInput[] | FormFieldUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutFormInput | FormFieldCreateOrConnectWithoutFormInput[]
    createMany?: FormFieldCreateManyFormInputEnvelope
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
  }

  export type FormSubmissionCreateNestedManyWithoutFormInput = {
    create?: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput> | FormSubmissionCreateWithoutFormInput[] | FormSubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutFormInput | FormSubmissionCreateOrConnectWithoutFormInput[]
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
  }

  export type FormFieldUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormFieldCreateWithoutFormInput, FormFieldUncheckedCreateWithoutFormInput> | FormFieldCreateWithoutFormInput[] | FormFieldUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutFormInput | FormFieldCreateOrConnectWithoutFormInput[]
    createMany?: FormFieldCreateManyFormInputEnvelope
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
  }

  export type FormSubmissionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput> | FormSubmissionCreateWithoutFormInput[] | FormSubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutFormInput | FormSubmissionCreateOrConnectWithoutFormInput[]
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FormFieldUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormFieldCreateWithoutFormInput, FormFieldUncheckedCreateWithoutFormInput> | FormFieldCreateWithoutFormInput[] | FormFieldUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutFormInput | FormFieldCreateOrConnectWithoutFormInput[]
    upsert?: FormFieldUpsertWithWhereUniqueWithoutFormInput | FormFieldUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormFieldCreateManyFormInputEnvelope
    set?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    disconnect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    delete?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    update?: FormFieldUpdateWithWhereUniqueWithoutFormInput | FormFieldUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormFieldUpdateManyWithWhereWithoutFormInput | FormFieldUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
  }

  export type FormSubmissionUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput> | FormSubmissionCreateWithoutFormInput[] | FormSubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutFormInput | FormSubmissionCreateOrConnectWithoutFormInput[]
    upsert?: FormSubmissionUpsertWithWhereUniqueWithoutFormInput | FormSubmissionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    set?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    disconnect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    delete?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    update?: FormSubmissionUpdateWithWhereUniqueWithoutFormInput | FormSubmissionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormSubmissionUpdateManyWithWhereWithoutFormInput | FormSubmissionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
  }

  export type FormFieldUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormFieldCreateWithoutFormInput, FormFieldUncheckedCreateWithoutFormInput> | FormFieldCreateWithoutFormInput[] | FormFieldUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutFormInput | FormFieldCreateOrConnectWithoutFormInput[]
    upsert?: FormFieldUpsertWithWhereUniqueWithoutFormInput | FormFieldUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormFieldCreateManyFormInputEnvelope
    set?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    disconnect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    delete?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    update?: FormFieldUpdateWithWhereUniqueWithoutFormInput | FormFieldUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormFieldUpdateManyWithWhereWithoutFormInput | FormFieldUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
  }

  export type FormSubmissionUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput> | FormSubmissionCreateWithoutFormInput[] | FormSubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutFormInput | FormSubmissionCreateOrConnectWithoutFormInput[]
    upsert?: FormSubmissionUpsertWithWhereUniqueWithoutFormInput | FormSubmissionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    set?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    disconnect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    delete?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    update?: FormSubmissionUpdateWithWhereUniqueWithoutFormInput | FormSubmissionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormSubmissionUpdateManyWithWhereWithoutFormInput | FormSubmissionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
  }

  export type FormCreateNestedOneWithoutFieldsInput = {
    create?: XOR<FormCreateWithoutFieldsInput, FormUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: FormCreateOrConnectWithoutFieldsInput
    connect?: FormWhereUniqueInput
  }

  export type FieldResponseCreateNestedManyWithoutFieldInput = {
    create?: XOR<FieldResponseCreateWithoutFieldInput, FieldResponseUncheckedCreateWithoutFieldInput> | FieldResponseCreateWithoutFieldInput[] | FieldResponseUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldResponseCreateOrConnectWithoutFieldInput | FieldResponseCreateOrConnectWithoutFieldInput[]
    createMany?: FieldResponseCreateManyFieldInputEnvelope
    connect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
  }

  export type FieldOptionCreateNestedManyWithoutFieldInput = {
    create?: XOR<FieldOptionCreateWithoutFieldInput, FieldOptionUncheckedCreateWithoutFieldInput> | FieldOptionCreateWithoutFieldInput[] | FieldOptionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldOptionCreateOrConnectWithoutFieldInput | FieldOptionCreateOrConnectWithoutFieldInput[]
    createMany?: FieldOptionCreateManyFieldInputEnvelope
    connect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
  }

  export type FieldResponseUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<FieldResponseCreateWithoutFieldInput, FieldResponseUncheckedCreateWithoutFieldInput> | FieldResponseCreateWithoutFieldInput[] | FieldResponseUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldResponseCreateOrConnectWithoutFieldInput | FieldResponseCreateOrConnectWithoutFieldInput[]
    createMany?: FieldResponseCreateManyFieldInputEnvelope
    connect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
  }

  export type FieldOptionUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<FieldOptionCreateWithoutFieldInput, FieldOptionUncheckedCreateWithoutFieldInput> | FieldOptionCreateWithoutFieldInput[] | FieldOptionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldOptionCreateOrConnectWithoutFieldInput | FieldOptionCreateOrConnectWithoutFieldInput[]
    createMany?: FieldOptionCreateManyFieldInputEnvelope
    connect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
  }

  export type EnumFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.FieldType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type FormUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<FormCreateWithoutFieldsInput, FormUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: FormCreateOrConnectWithoutFieldsInput
    upsert?: FormUpsertWithoutFieldsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutFieldsInput, FormUpdateWithoutFieldsInput>, FormUncheckedUpdateWithoutFieldsInput>
  }

  export type FieldResponseUpdateManyWithoutFieldNestedInput = {
    create?: XOR<FieldResponseCreateWithoutFieldInput, FieldResponseUncheckedCreateWithoutFieldInput> | FieldResponseCreateWithoutFieldInput[] | FieldResponseUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldResponseCreateOrConnectWithoutFieldInput | FieldResponseCreateOrConnectWithoutFieldInput[]
    upsert?: FieldResponseUpsertWithWhereUniqueWithoutFieldInput | FieldResponseUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: FieldResponseCreateManyFieldInputEnvelope
    set?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    disconnect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    delete?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    connect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    update?: FieldResponseUpdateWithWhereUniqueWithoutFieldInput | FieldResponseUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: FieldResponseUpdateManyWithWhereWithoutFieldInput | FieldResponseUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: FieldResponseScalarWhereInput | FieldResponseScalarWhereInput[]
  }

  export type FieldOptionUpdateManyWithoutFieldNestedInput = {
    create?: XOR<FieldOptionCreateWithoutFieldInput, FieldOptionUncheckedCreateWithoutFieldInput> | FieldOptionCreateWithoutFieldInput[] | FieldOptionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldOptionCreateOrConnectWithoutFieldInput | FieldOptionCreateOrConnectWithoutFieldInput[]
    upsert?: FieldOptionUpsertWithWhereUniqueWithoutFieldInput | FieldOptionUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: FieldOptionCreateManyFieldInputEnvelope
    set?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    disconnect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    delete?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    connect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    update?: FieldOptionUpdateWithWhereUniqueWithoutFieldInput | FieldOptionUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: FieldOptionUpdateManyWithWhereWithoutFieldInput | FieldOptionUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: FieldOptionScalarWhereInput | FieldOptionScalarWhereInput[]
  }

  export type FieldResponseUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<FieldResponseCreateWithoutFieldInput, FieldResponseUncheckedCreateWithoutFieldInput> | FieldResponseCreateWithoutFieldInput[] | FieldResponseUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldResponseCreateOrConnectWithoutFieldInput | FieldResponseCreateOrConnectWithoutFieldInput[]
    upsert?: FieldResponseUpsertWithWhereUniqueWithoutFieldInput | FieldResponseUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: FieldResponseCreateManyFieldInputEnvelope
    set?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    disconnect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    delete?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    connect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    update?: FieldResponseUpdateWithWhereUniqueWithoutFieldInput | FieldResponseUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: FieldResponseUpdateManyWithWhereWithoutFieldInput | FieldResponseUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: FieldResponseScalarWhereInput | FieldResponseScalarWhereInput[]
  }

  export type FieldOptionUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<FieldOptionCreateWithoutFieldInput, FieldOptionUncheckedCreateWithoutFieldInput> | FieldOptionCreateWithoutFieldInput[] | FieldOptionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FieldOptionCreateOrConnectWithoutFieldInput | FieldOptionCreateOrConnectWithoutFieldInput[]
    upsert?: FieldOptionUpsertWithWhereUniqueWithoutFieldInput | FieldOptionUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: FieldOptionCreateManyFieldInputEnvelope
    set?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    disconnect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    delete?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    connect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    update?: FieldOptionUpdateWithWhereUniqueWithoutFieldInput | FieldOptionUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: FieldOptionUpdateManyWithWhereWithoutFieldInput | FieldOptionUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: FieldOptionScalarWhereInput | FieldOptionScalarWhereInput[]
  }

  export type FormFieldCreateNestedOneWithoutOptionsInput = {
    create?: XOR<FormFieldCreateWithoutOptionsInput, FormFieldUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: FormFieldCreateOrConnectWithoutOptionsInput
    connect?: FormFieldWhereUniqueInput
  }

  export type FormFieldUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<FormFieldCreateWithoutOptionsInput, FormFieldUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: FormFieldCreateOrConnectWithoutOptionsInput
    upsert?: FormFieldUpsertWithoutOptionsInput
    connect?: FormFieldWhereUniqueInput
    update?: XOR<XOR<FormFieldUpdateToOneWithWhereWithoutOptionsInput, FormFieldUpdateWithoutOptionsInput>, FormFieldUncheckedUpdateWithoutOptionsInput>
  }

  export type FormCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutSubmissionsInput
    connect?: FormWhereUniqueInput
  }

  export type FieldResponseCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<FieldResponseCreateWithoutSubmissionInput, FieldResponseUncheckedCreateWithoutSubmissionInput> | FieldResponseCreateWithoutSubmissionInput[] | FieldResponseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: FieldResponseCreateOrConnectWithoutSubmissionInput | FieldResponseCreateOrConnectWithoutSubmissionInput[]
    createMany?: FieldResponseCreateManySubmissionInputEnvelope
    connect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
  }

  export type FieldResponseUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<FieldResponseCreateWithoutSubmissionInput, FieldResponseUncheckedCreateWithoutSubmissionInput> | FieldResponseCreateWithoutSubmissionInput[] | FieldResponseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: FieldResponseCreateOrConnectWithoutSubmissionInput | FieldResponseCreateOrConnectWithoutSubmissionInput[]
    createMany?: FieldResponseCreateManySubmissionInputEnvelope
    connect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
  }

  export type FormUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutSubmissionsInput
    upsert?: FormUpsertWithoutSubmissionsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutSubmissionsInput, FormUpdateWithoutSubmissionsInput>, FormUncheckedUpdateWithoutSubmissionsInput>
  }

  export type FieldResponseUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<FieldResponseCreateWithoutSubmissionInput, FieldResponseUncheckedCreateWithoutSubmissionInput> | FieldResponseCreateWithoutSubmissionInput[] | FieldResponseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: FieldResponseCreateOrConnectWithoutSubmissionInput | FieldResponseCreateOrConnectWithoutSubmissionInput[]
    upsert?: FieldResponseUpsertWithWhereUniqueWithoutSubmissionInput | FieldResponseUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: FieldResponseCreateManySubmissionInputEnvelope
    set?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    disconnect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    delete?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    connect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    update?: FieldResponseUpdateWithWhereUniqueWithoutSubmissionInput | FieldResponseUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: FieldResponseUpdateManyWithWhereWithoutSubmissionInput | FieldResponseUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: FieldResponseScalarWhereInput | FieldResponseScalarWhereInput[]
  }

  export type FieldResponseUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<FieldResponseCreateWithoutSubmissionInput, FieldResponseUncheckedCreateWithoutSubmissionInput> | FieldResponseCreateWithoutSubmissionInput[] | FieldResponseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: FieldResponseCreateOrConnectWithoutSubmissionInput | FieldResponseCreateOrConnectWithoutSubmissionInput[]
    upsert?: FieldResponseUpsertWithWhereUniqueWithoutSubmissionInput | FieldResponseUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: FieldResponseCreateManySubmissionInputEnvelope
    set?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    disconnect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    delete?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    connect?: FieldResponseWhereUniqueInput | FieldResponseWhereUniqueInput[]
    update?: FieldResponseUpdateWithWhereUniqueWithoutSubmissionInput | FieldResponseUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: FieldResponseUpdateManyWithWhereWithoutSubmissionInput | FieldResponseUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: FieldResponseScalarWhereInput | FieldResponseScalarWhereInput[]
  }

  export type FieldResponseCreateselectedOptionsInput = {
    set: string[]
  }

  export type FormSubmissionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<FormSubmissionCreateWithoutResponsesInput, FormSubmissionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutResponsesInput
    connect?: FormSubmissionWhereUniqueInput
  }

  export type FormFieldCreateNestedOneWithoutResponsesInput = {
    create?: XOR<FormFieldCreateWithoutResponsesInput, FormFieldUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormFieldCreateOrConnectWithoutResponsesInput
    connect?: FormFieldWhereUniqueInput
  }

  export type FieldResponseUpdateselectedOptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FormSubmissionUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutResponsesInput, FormSubmissionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutResponsesInput
    upsert?: FormSubmissionUpsertWithoutResponsesInput
    connect?: FormSubmissionWhereUniqueInput
    update?: XOR<XOR<FormSubmissionUpdateToOneWithWhereWithoutResponsesInput, FormSubmissionUpdateWithoutResponsesInput>, FormSubmissionUncheckedUpdateWithoutResponsesInput>
  }

  export type FormFieldUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<FormFieldCreateWithoutResponsesInput, FormFieldUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormFieldCreateOrConnectWithoutResponsesInput
    upsert?: FormFieldUpsertWithoutResponsesInput
    connect?: FormFieldWhereUniqueInput
    update?: XOR<XOR<FormFieldUpdateToOneWithWhereWithoutResponsesInput, FormFieldUpdateWithoutResponsesInput>, FormFieldUncheckedUpdateWithoutResponsesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FormFieldCreateWithoutFormInput = {
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: FieldResponseCreateNestedManyWithoutFieldInput
    options?: FieldOptionCreateNestedManyWithoutFieldInput
  }

  export type FormFieldUncheckedCreateWithoutFormInput = {
    id?: number
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: FieldResponseUncheckedCreateNestedManyWithoutFieldInput
    options?: FieldOptionUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FormFieldCreateOrConnectWithoutFormInput = {
    where: FormFieldWhereUniqueInput
    create: XOR<FormFieldCreateWithoutFormInput, FormFieldUncheckedCreateWithoutFormInput>
  }

  export type FormFieldCreateManyFormInputEnvelope = {
    data: FormFieldCreateManyFormInput | FormFieldCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type FormSubmissionCreateWithoutFormInput = {
    createdAt?: Date | string
    responses?: FieldResponseCreateNestedManyWithoutSubmissionInput
  }

  export type FormSubmissionUncheckedCreateWithoutFormInput = {
    id?: number
    createdAt?: Date | string
    responses?: FieldResponseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type FormSubmissionCreateOrConnectWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    create: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput>
  }

  export type FormSubmissionCreateManyFormInputEnvelope = {
    data: FormSubmissionCreateManyFormInput | FormSubmissionCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type FormFieldUpsertWithWhereUniqueWithoutFormInput = {
    where: FormFieldWhereUniqueInput
    update: XOR<FormFieldUpdateWithoutFormInput, FormFieldUncheckedUpdateWithoutFormInput>
    create: XOR<FormFieldCreateWithoutFormInput, FormFieldUncheckedCreateWithoutFormInput>
  }

  export type FormFieldUpdateWithWhereUniqueWithoutFormInput = {
    where: FormFieldWhereUniqueInput
    data: XOR<FormFieldUpdateWithoutFormInput, FormFieldUncheckedUpdateWithoutFormInput>
  }

  export type FormFieldUpdateManyWithWhereWithoutFormInput = {
    where: FormFieldScalarWhereInput
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyWithoutFormInput>
  }

  export type FormFieldScalarWhereInput = {
    AND?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
    OR?: FormFieldScalarWhereInput[]
    NOT?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
    id?: IntFilter<"FormField"> | number
    formId?: IntFilter<"FormField"> | number
    order?: IntFilter<"FormField"> | number
    type?: EnumFieldTypeFilter<"FormField"> | $Enums.FieldType
    label?: StringFilter<"FormField"> | string
    required?: BoolFilter<"FormField"> | boolean
    placeholder?: StringNullableFilter<"FormField"> | string | null
    multiline?: BoolNullableFilter<"FormField"> | boolean | null
    createdAt?: DateTimeFilter<"FormField"> | Date | string
    updatedAt?: DateTimeFilter<"FormField"> | Date | string
  }

  export type FormSubmissionUpsertWithWhereUniqueWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    update: XOR<FormSubmissionUpdateWithoutFormInput, FormSubmissionUncheckedUpdateWithoutFormInput>
    create: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput>
  }

  export type FormSubmissionUpdateWithWhereUniqueWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    data: XOR<FormSubmissionUpdateWithoutFormInput, FormSubmissionUncheckedUpdateWithoutFormInput>
  }

  export type FormSubmissionUpdateManyWithWhereWithoutFormInput = {
    where: FormSubmissionScalarWhereInput
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyWithoutFormInput>
  }

  export type FormSubmissionScalarWhereInput = {
    AND?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
    OR?: FormSubmissionScalarWhereInput[]
    NOT?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
    id?: IntFilter<"FormSubmission"> | number
    formId?: IntFilter<"FormSubmission"> | number
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
  }

  export type FormCreateWithoutFieldsInput = {
    formName: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: FormSubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutFieldsInput = {
    id?: number
    formName: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: FormSubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutFieldsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutFieldsInput, FormUncheckedCreateWithoutFieldsInput>
  }

  export type FieldResponseCreateWithoutFieldInput = {
    id?: string
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submission: FormSubmissionCreateNestedOneWithoutResponsesInput
  }

  export type FieldResponseUncheckedCreateWithoutFieldInput = {
    id?: string
    submissionId: number
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FieldResponseCreateOrConnectWithoutFieldInput = {
    where: FieldResponseWhereUniqueInput
    create: XOR<FieldResponseCreateWithoutFieldInput, FieldResponseUncheckedCreateWithoutFieldInput>
  }

  export type FieldResponseCreateManyFieldInputEnvelope = {
    data: FieldResponseCreateManyFieldInput | FieldResponseCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type FieldOptionCreateWithoutFieldInput = {
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldOptionUncheckedCreateWithoutFieldInput = {
    id?: number
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldOptionCreateOrConnectWithoutFieldInput = {
    where: FieldOptionWhereUniqueInput
    create: XOR<FieldOptionCreateWithoutFieldInput, FieldOptionUncheckedCreateWithoutFieldInput>
  }

  export type FieldOptionCreateManyFieldInputEnvelope = {
    data: FieldOptionCreateManyFieldInput | FieldOptionCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type FormUpsertWithoutFieldsInput = {
    update: XOR<FormUpdateWithoutFieldsInput, FormUncheckedUpdateWithoutFieldsInput>
    create: XOR<FormCreateWithoutFieldsInput, FormUncheckedCreateWithoutFieldsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutFieldsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutFieldsInput, FormUncheckedUpdateWithoutFieldsInput>
  }

  export type FormUpdateWithoutFieldsInput = {
    formName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: FormSubmissionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    formName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: FormSubmissionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FieldResponseUpsertWithWhereUniqueWithoutFieldInput = {
    where: FieldResponseWhereUniqueInput
    update: XOR<FieldResponseUpdateWithoutFieldInput, FieldResponseUncheckedUpdateWithoutFieldInput>
    create: XOR<FieldResponseCreateWithoutFieldInput, FieldResponseUncheckedCreateWithoutFieldInput>
  }

  export type FieldResponseUpdateWithWhereUniqueWithoutFieldInput = {
    where: FieldResponseWhereUniqueInput
    data: XOR<FieldResponseUpdateWithoutFieldInput, FieldResponseUncheckedUpdateWithoutFieldInput>
  }

  export type FieldResponseUpdateManyWithWhereWithoutFieldInput = {
    where: FieldResponseScalarWhereInput
    data: XOR<FieldResponseUpdateManyMutationInput, FieldResponseUncheckedUpdateManyWithoutFieldInput>
  }

  export type FieldResponseScalarWhereInput = {
    AND?: FieldResponseScalarWhereInput | FieldResponseScalarWhereInput[]
    OR?: FieldResponseScalarWhereInput[]
    NOT?: FieldResponseScalarWhereInput | FieldResponseScalarWhereInput[]
    id?: StringFilter<"FieldResponse"> | string
    submissionId?: IntFilter<"FieldResponse"> | number
    fieldId?: IntFilter<"FieldResponse"> | number
    textValue?: StringNullableFilter<"FieldResponse"> | string | null
    selectedOption?: StringNullableFilter<"FieldResponse"> | string | null
    selectedOptions?: StringNullableListFilter<"FieldResponse">
    tableValue?: JsonNullableFilter<"FieldResponse">
    createdAt?: DateTimeFilter<"FieldResponse"> | Date | string
  }

  export type FieldOptionUpsertWithWhereUniqueWithoutFieldInput = {
    where: FieldOptionWhereUniqueInput
    update: XOR<FieldOptionUpdateWithoutFieldInput, FieldOptionUncheckedUpdateWithoutFieldInput>
    create: XOR<FieldOptionCreateWithoutFieldInput, FieldOptionUncheckedCreateWithoutFieldInput>
  }

  export type FieldOptionUpdateWithWhereUniqueWithoutFieldInput = {
    where: FieldOptionWhereUniqueInput
    data: XOR<FieldOptionUpdateWithoutFieldInput, FieldOptionUncheckedUpdateWithoutFieldInput>
  }

  export type FieldOptionUpdateManyWithWhereWithoutFieldInput = {
    where: FieldOptionScalarWhereInput
    data: XOR<FieldOptionUpdateManyMutationInput, FieldOptionUncheckedUpdateManyWithoutFieldInput>
  }

  export type FieldOptionScalarWhereInput = {
    AND?: FieldOptionScalarWhereInput | FieldOptionScalarWhereInput[]
    OR?: FieldOptionScalarWhereInput[]
    NOT?: FieldOptionScalarWhereInput | FieldOptionScalarWhereInput[]
    id?: IntFilter<"FieldOption"> | number
    label?: StringFilter<"FieldOption"> | string
    fieldId?: IntFilter<"FieldOption"> | number
    createdAt?: DateTimeFilter<"FieldOption"> | Date | string
    updatedAt?: DateTimeFilter<"FieldOption"> | Date | string
  }

  export type FormFieldCreateWithoutOptionsInput = {
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutFieldsInput
    responses?: FieldResponseCreateNestedManyWithoutFieldInput
  }

  export type FormFieldUncheckedCreateWithoutOptionsInput = {
    id?: number
    formId: number
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: FieldResponseUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FormFieldCreateOrConnectWithoutOptionsInput = {
    where: FormFieldWhereUniqueInput
    create: XOR<FormFieldCreateWithoutOptionsInput, FormFieldUncheckedCreateWithoutOptionsInput>
  }

  export type FormFieldUpsertWithoutOptionsInput = {
    update: XOR<FormFieldUpdateWithoutOptionsInput, FormFieldUncheckedUpdateWithoutOptionsInput>
    create: XOR<FormFieldCreateWithoutOptionsInput, FormFieldUncheckedCreateWithoutOptionsInput>
    where?: FormFieldWhereInput
  }

  export type FormFieldUpdateToOneWithWhereWithoutOptionsInput = {
    where?: FormFieldWhereInput
    data: XOR<FormFieldUpdateWithoutOptionsInput, FormFieldUncheckedUpdateWithoutOptionsInput>
  }

  export type FormFieldUpdateWithoutOptionsInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutFieldsNestedInput
    responses?: FieldResponseUpdateManyWithoutFieldNestedInput
  }

  export type FormFieldUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    formId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FieldResponseUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FormCreateWithoutSubmissionsInput = {
    formName: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FormFieldCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    formName: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FormFieldUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutSubmissionsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
  }

  export type FieldResponseCreateWithoutSubmissionInput = {
    id?: string
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    field: FormFieldCreateNestedOneWithoutResponsesInput
  }

  export type FieldResponseUncheckedCreateWithoutSubmissionInput = {
    id?: string
    fieldId: number
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FieldResponseCreateOrConnectWithoutSubmissionInput = {
    where: FieldResponseWhereUniqueInput
    create: XOR<FieldResponseCreateWithoutSubmissionInput, FieldResponseUncheckedCreateWithoutSubmissionInput>
  }

  export type FieldResponseCreateManySubmissionInputEnvelope = {
    data: FieldResponseCreateManySubmissionInput | FieldResponseCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type FormUpsertWithoutSubmissionsInput = {
    update: XOR<FormUpdateWithoutSubmissionsInput, FormUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutSubmissionsInput, FormUncheckedUpdateWithoutSubmissionsInput>
  }

  export type FormUpdateWithoutSubmissionsInput = {
    formName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FormFieldUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    formName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FormFieldUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FieldResponseUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: FieldResponseWhereUniqueInput
    update: XOR<FieldResponseUpdateWithoutSubmissionInput, FieldResponseUncheckedUpdateWithoutSubmissionInput>
    create: XOR<FieldResponseCreateWithoutSubmissionInput, FieldResponseUncheckedCreateWithoutSubmissionInput>
  }

  export type FieldResponseUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: FieldResponseWhereUniqueInput
    data: XOR<FieldResponseUpdateWithoutSubmissionInput, FieldResponseUncheckedUpdateWithoutSubmissionInput>
  }

  export type FieldResponseUpdateManyWithWhereWithoutSubmissionInput = {
    where: FieldResponseScalarWhereInput
    data: XOR<FieldResponseUpdateManyMutationInput, FieldResponseUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type FormSubmissionCreateWithoutResponsesInput = {
    createdAt?: Date | string
    form: FormCreateNestedOneWithoutSubmissionsInput
  }

  export type FormSubmissionUncheckedCreateWithoutResponsesInput = {
    id?: number
    formId: number
    createdAt?: Date | string
  }

  export type FormSubmissionCreateOrConnectWithoutResponsesInput = {
    where: FormSubmissionWhereUniqueInput
    create: XOR<FormSubmissionCreateWithoutResponsesInput, FormSubmissionUncheckedCreateWithoutResponsesInput>
  }

  export type FormFieldCreateWithoutResponsesInput = {
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutFieldsInput
    options?: FieldOptionCreateNestedManyWithoutFieldInput
  }

  export type FormFieldUncheckedCreateWithoutResponsesInput = {
    id?: number
    formId: number
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: FieldOptionUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FormFieldCreateOrConnectWithoutResponsesInput = {
    where: FormFieldWhereUniqueInput
    create: XOR<FormFieldCreateWithoutResponsesInput, FormFieldUncheckedCreateWithoutResponsesInput>
  }

  export type FormSubmissionUpsertWithoutResponsesInput = {
    update: XOR<FormSubmissionUpdateWithoutResponsesInput, FormSubmissionUncheckedUpdateWithoutResponsesInput>
    create: XOR<FormSubmissionCreateWithoutResponsesInput, FormSubmissionUncheckedCreateWithoutResponsesInput>
    where?: FormSubmissionWhereInput
  }

  export type FormSubmissionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: FormSubmissionWhereInput
    data: XOR<FormSubmissionUpdateWithoutResponsesInput, FormSubmissionUncheckedUpdateWithoutResponsesInput>
  }

  export type FormSubmissionUpdateWithoutResponsesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type FormSubmissionUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    formId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormFieldUpsertWithoutResponsesInput = {
    update: XOR<FormFieldUpdateWithoutResponsesInput, FormFieldUncheckedUpdateWithoutResponsesInput>
    create: XOR<FormFieldCreateWithoutResponsesInput, FormFieldUncheckedCreateWithoutResponsesInput>
    where?: FormFieldWhereInput
  }

  export type FormFieldUpdateToOneWithWhereWithoutResponsesInput = {
    where?: FormFieldWhereInput
    data: XOR<FormFieldUpdateWithoutResponsesInput, FormFieldUncheckedUpdateWithoutResponsesInput>
  }

  export type FormFieldUpdateWithoutResponsesInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutFieldsNestedInput
    options?: FieldOptionUpdateManyWithoutFieldNestedInput
  }

  export type FormFieldUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    formId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: FieldOptionUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FormFieldCreateManyFormInput = {
    id?: number
    order: number
    type: $Enums.FieldType
    label: string
    required?: boolean
    placeholder?: string | null
    multiline?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormSubmissionCreateManyFormInput = {
    id?: number
    createdAt?: Date | string
  }

  export type FormFieldUpdateWithoutFormInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FieldResponseUpdateManyWithoutFieldNestedInput
    options?: FieldOptionUpdateManyWithoutFieldNestedInput
  }

  export type FormFieldUncheckedUpdateWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FieldResponseUncheckedUpdateManyWithoutFieldNestedInput
    options?: FieldOptionUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FormFieldUncheckedUpdateManyWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    label?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    multiline?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUpdateWithoutFormInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FieldResponseUpdateManyWithoutSubmissionNestedInput
  }

  export type FormSubmissionUncheckedUpdateWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FieldResponseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type FormSubmissionUncheckedUpdateManyWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldResponseCreateManyFieldInput = {
    id?: string
    submissionId: number
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FieldOptionCreateManyFieldInput = {
    id?: number
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldResponseUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: FormSubmissionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type FieldResponseUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: IntFieldUpdateOperationsInput | number
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldResponseUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: IntFieldUpdateOperationsInput | number
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionUpdateWithoutFieldInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionUncheckedUpdateWithoutFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionUncheckedUpdateManyWithoutFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldResponseCreateManySubmissionInput = {
    id?: string
    fieldId: number
    textValue?: string | null
    selectedOption?: string | null
    selectedOptions?: FieldResponseCreateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FieldResponseUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FormFieldUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type FieldResponseUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: IntFieldUpdateOperationsInput | number
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldResponseUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: IntFieldUpdateOperationsInput | number
    textValue?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOption?: NullableStringFieldUpdateOperationsInput | string | null
    selectedOptions?: FieldResponseUpdateselectedOptionsInput | string[]
    tableValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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