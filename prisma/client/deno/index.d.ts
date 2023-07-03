
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type CountryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    destinations: DestinationPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    code: string
    name: string
  }, ExtArgs["result"]["country"]>
  composites: {}
}

/**
 * Model Country
 * 
 */
export type Country = runtime.Types.DefaultSelection<CountryPayload>
export type DestinationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    attractions: AttractionPayload<ExtArgs>[]
    country: CountryPayload<ExtArgs>
    images: DestinationImagePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    region: string
    countryId: number
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["destination"]>
  composites: {}
}

/**
 * Model Destination
 * 
 */
export type Destination = runtime.Types.DefaultSelection<DestinationPayload>
export type AttractionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    destination: DestinationPayload<ExtArgs>
    images: AttractionImagePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    destinationId: number
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["attraction"]>
  composites: {}
}

/**
 * Model Attraction
 * 
 */
export type Attraction = runtime.Types.DefaultSelection<AttractionPayload>
export type DestinationImagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    destination: DestinationPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    url: string
    destinationId: number
  }, ExtArgs["result"]["destinationImage"]>
  composites: {}
}

/**
 * Model DestinationImage
 * 
 */
export type DestinationImage = runtime.Types.DefaultSelection<DestinationImagePayload>
export type AttractionImagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    attraction: AttractionPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    url: string
    attractionId: number
  }, ExtArgs["result"]["attractionImage"]>
  composites: {}
}

/**
 * Model AttractionImage
 * 
 */
export type AttractionImage = runtime.Types.DefaultSelection<AttractionImagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.attraction`: Exposes CRUD operations for the **Attraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attractions
    * const attractions = await prisma.attraction.findMany()
    * ```
    */
  get attraction(): Prisma.AttractionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.destinationImage`: Exposes CRUD operations for the **DestinationImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DestinationImages
    * const destinationImages = await prisma.destinationImage.findMany()
    * ```
    */
  get destinationImage(): Prisma.DestinationImageDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.attractionImage`: Exposes CRUD operations for the **AttractionImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttractionImages
    * const attractionImages = await prisma.attractionImage.findMany()
    * ```
    */
  get attractionImage(): Prisma.AttractionImageDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.1
   * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Country: 'Country',
    Destination: 'Destination',
    Attraction: 'Attraction',
    DestinationImage: 'DestinationImage',
    AttractionImage: 'AttractionImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'country' | 'destination' | 'attraction' | 'destinationImage' | 'attractionImage'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Country: {
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload> | null
            payload: CountryPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload>
            payload: CountryPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload> | null
            payload: CountryPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload>
            payload: CountryPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload>[]
            payload: CountryPayload<ExtArgs>
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload>
            payload: CountryPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CountryPayload<ExtArgs>
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload>
            payload: CountryPayload<ExtArgs>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload>
            payload: CountryPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CountryPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: CountryPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CountryPayload>
            payload: CountryPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCountry>
            payload: CountryPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CountryGroupByOutputType>[]
            payload: CountryPayload<ExtArgs>
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>,
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
            payload: CountryPayload<ExtArgs>
          }
        }
      }
      Destination: {
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload> | null
            payload: DestinationPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload>
            payload: DestinationPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload> | null
            payload: DestinationPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload>
            payload: DestinationPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload>[]
            payload: DestinationPayload<ExtArgs>
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload>
            payload: DestinationPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: DestinationPayload<ExtArgs>
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload>
            payload: DestinationPayload<ExtArgs>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload>
            payload: DestinationPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: DestinationPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: DestinationPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationPayload>
            payload: DestinationPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDestination>
            payload: DestinationPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DestinationGroupByOutputType>[]
            payload: DestinationPayload<ExtArgs>
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>,
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
            payload: DestinationPayload<ExtArgs>
          }
        }
      }
      Attraction: {
        operations: {
          findUnique: {
            args: Prisma.AttractionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload> | null
            payload: AttractionPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.AttractionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload>
            payload: AttractionPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.AttractionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload> | null
            payload: AttractionPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.AttractionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload>
            payload: AttractionPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.AttractionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload>[]
            payload: AttractionPayload<ExtArgs>
          }
          create: {
            args: Prisma.AttractionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload>
            payload: AttractionPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.AttractionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AttractionPayload<ExtArgs>
          }
          delete: {
            args: Prisma.AttractionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload>
            payload: AttractionPayload<ExtArgs>
          }
          update: {
            args: Prisma.AttractionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload>
            payload: AttractionPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.AttractionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AttractionPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.AttractionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AttractionPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.AttractionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionPayload>
            payload: AttractionPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.AttractionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttraction>
            payload: AttractionPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.AttractionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttractionGroupByOutputType>[]
            payload: AttractionPayload<ExtArgs>
          }
          count: {
            args: Prisma.AttractionCountArgs<ExtArgs>,
            result: $Utils.Optional<AttractionCountAggregateOutputType> | number
            payload: AttractionPayload<ExtArgs>
          }
        }
      }
      DestinationImage: {
        operations: {
          findUnique: {
            args: Prisma.DestinationImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload> | null
            payload: DestinationImagePayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload>
            payload: DestinationImagePayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.DestinationImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload> | null
            payload: DestinationImagePayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.DestinationImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload>
            payload: DestinationImagePayload<ExtArgs>
          }
          findMany: {
            args: Prisma.DestinationImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload>[]
            payload: DestinationImagePayload<ExtArgs>
          }
          create: {
            args: Prisma.DestinationImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload>
            payload: DestinationImagePayload<ExtArgs>
          }
          createMany: {
            args: Prisma.DestinationImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: DestinationImagePayload<ExtArgs>
          }
          delete: {
            args: Prisma.DestinationImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload>
            payload: DestinationImagePayload<ExtArgs>
          }
          update: {
            args: Prisma.DestinationImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload>
            payload: DestinationImagePayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.DestinationImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: DestinationImagePayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.DestinationImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: DestinationImagePayload<ExtArgs>
          }
          upsert: {
            args: Prisma.DestinationImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DestinationImagePayload>
            payload: DestinationImagePayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.DestinationImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDestinationImage>
            payload: DestinationImagePayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.DestinationImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DestinationImageGroupByOutputType>[]
            payload: DestinationImagePayload<ExtArgs>
          }
          count: {
            args: Prisma.DestinationImageCountArgs<ExtArgs>,
            result: $Utils.Optional<DestinationImageCountAggregateOutputType> | number
            payload: DestinationImagePayload<ExtArgs>
          }
        }
      }
      AttractionImage: {
        operations: {
          findUnique: {
            args: Prisma.AttractionImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload> | null
            payload: AttractionImagePayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.AttractionImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload>
            payload: AttractionImagePayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.AttractionImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload> | null
            payload: AttractionImagePayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.AttractionImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload>
            payload: AttractionImagePayload<ExtArgs>
          }
          findMany: {
            args: Prisma.AttractionImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload>[]
            payload: AttractionImagePayload<ExtArgs>
          }
          create: {
            args: Prisma.AttractionImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload>
            payload: AttractionImagePayload<ExtArgs>
          }
          createMany: {
            args: Prisma.AttractionImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AttractionImagePayload<ExtArgs>
          }
          delete: {
            args: Prisma.AttractionImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload>
            payload: AttractionImagePayload<ExtArgs>
          }
          update: {
            args: Prisma.AttractionImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload>
            payload: AttractionImagePayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.AttractionImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AttractionImagePayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.AttractionImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: AttractionImagePayload<ExtArgs>
          }
          upsert: {
            args: Prisma.AttractionImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttractionImagePayload>
            payload: AttractionImagePayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.AttractionImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttractionImage>
            payload: AttractionImagePayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.AttractionImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttractionImageGroupByOutputType>[]
            payload: AttractionImagePayload<ExtArgs>
          }
          count: {
            args: Prisma.AttractionImageCountArgs<ExtArgs>,
            result: $Utils.Optional<AttractionImageCountAggregateOutputType> | number
            payload: AttractionImagePayload<ExtArgs>
          }
        }
      }
    }
  } & {
    other: {
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
          payload: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
          payload: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
          payload: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
          payload: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type CountryCountOutputType
   */


  export type CountryCountOutputType = {
    destinations: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    destinations?: boolean | CountryCountOutputTypeCountDestinationsArgs
  }

  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }



  /**
   * Count Type DestinationCountOutputType
   */


  export type DestinationCountOutputType = {
    attractions: number
    images: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    attractions?: boolean | DestinationCountOutputTypeCountAttractionsArgs
    images?: boolean | DestinationCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountAttractionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AttractionWhereInput
  }


  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DestinationImageWhereInput
  }



  /**
   * Count Type AttractionCountOutputType
   */


  export type AttractionCountOutputType = {
    images: number
  }

  export type AttractionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    images?: boolean | AttractionCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes

  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionCountOutputType
     */
    select?: AttractionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AttractionCountOutputType without action
   */
  export type AttractionCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AttractionImageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Country
   */


  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: Enumerable<CountryOrderByWithAggregationInput>
    by: CountryScalarFieldEnum[]
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }


  export type CountryGroupByOutputType = {
    id: number
    code: string
    name: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    destinations?: boolean | Country$destinationsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    destinations?: boolean | Country$destinationsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeArgs<ExtArgs>
  }


  type CountryGetPayload<S extends boolean | null | undefined | CountryArgs> = $Types.GetResult<CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Country'> extends True ? Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Country'> extends True ? Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CountryPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryCreateArgs<ExtArgs>>
    ): Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>
    ): Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>
    ): Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>
    ): Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    destinations<T extends Country$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Country$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Country base type for findUnique actions
   */
  export type CountryFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUnique
   */
  export interface CountryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CountryFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country base type for findFirst actions
   */
  export type CountryFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }

  /**
   * Country findFirst
   */
  export interface CountryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CountryFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: Enumerable<CountryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }


  /**
   * Country.destinations
   */
  export type Country$destinationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: Enumerable<DestinationOrderByWithRelationInput>
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DestinationScalarFieldEnum>
  }


  /**
   * Country without action
   */
  export type CountryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
  }



  /**
   * Model Destination
   */


  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationAvgAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type DestinationSumAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type DestinationMinAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    countryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    countryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    name: number
    region: number
    countryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationAvgAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type DestinationSumAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type DestinationMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: Enumerable<DestinationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: Enumerable<DestinationOrderByWithAggregationInput>
    by: DestinationScalarFieldEnum[]
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _avg?: DestinationAvgAggregateInputType
    _sum?: DestinationSumAggregateInputType
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }


  export type DestinationGroupByOutputType = {
    id: number
    name: string
    region: string
    countryId: number
    createdAt: Date
    updatedAt: Date
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attractions?: boolean | Destination$attractionsArgs<ExtArgs>
    country?: boolean | CountryArgs<ExtArgs>
    images?: boolean | Destination$imagesArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    attractions?: boolean | Destination$attractionsArgs<ExtArgs>
    country?: boolean | CountryArgs<ExtArgs>
    images?: boolean | Destination$imagesArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeArgs<ExtArgs>
  }


  type DestinationGetPayload<S extends boolean | null | undefined | DestinationArgs> = $Types.GetResult<DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DestinationFindManyArgs, 'select' | 'include'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DestinationFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Destination'> extends True ? Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Destination that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DestinationFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Destination'> extends True ? Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Destination that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DestinationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
    **/
    create<T extends DestinationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>
    ): Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Destinations.
     *     @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     *     @example
     *     // Create many Destinations
     *     const destination = await prisma.destination.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DestinationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
    **/
    delete<T extends DestinationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>
    ): Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DestinationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>
    ): Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DestinationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DestinationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
    **/
    upsert<T extends DestinationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>
    ): Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
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
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    attractions<T extends Destination$attractionsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$attractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    country<T extends CountryArgs<ExtArgs> = {}>(args?: Subset<T, CountryArgs<ExtArgs>>): Prisma__CountryClient<$Types.GetResult<CountryPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    images<T extends Destination$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Destination$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Destination base type for findUnique actions
   */
  export type DestinationFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUnique
   */
  export interface DestinationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DestinationFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }


  /**
   * Destination base type for findFirst actions
   */
  export type DestinationFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: Enumerable<DestinationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: Enumerable<DestinationScalarFieldEnum>
  }

  /**
   * Destination findFirst
   */
  export interface DestinationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DestinationFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: Enumerable<DestinationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: Enumerable<DestinationScalarFieldEnum>
  }


  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: Enumerable<DestinationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: Enumerable<DestinationScalarFieldEnum>
  }


  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }


  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: Enumerable<DestinationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }


  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
  }


  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }


  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }


  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
  }


  /**
   * Destination.attractions
   */
  export type Destination$attractionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    where?: AttractionWhereInput
    orderBy?: Enumerable<AttractionOrderByWithRelationInput>
    cursor?: AttractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AttractionScalarFieldEnum>
  }


  /**
   * Destination.images
   */
  export type Destination$imagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    where?: DestinationImageWhereInput
    orderBy?: Enumerable<DestinationImageOrderByWithRelationInput>
    cursor?: DestinationImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DestinationImageScalarFieldEnum>
  }


  /**
   * Destination without action
   */
  export type DestinationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationInclude<ExtArgs> | null
  }



  /**
   * Model Attraction
   */


  export type AggregateAttraction = {
    _count: AttractionCountAggregateOutputType | null
    _avg: AttractionAvgAggregateOutputType | null
    _sum: AttractionSumAggregateOutputType | null
    _min: AttractionMinAggregateOutputType | null
    _max: AttractionMaxAggregateOutputType | null
  }

  export type AttractionAvgAggregateOutputType = {
    id: number | null
    destinationId: number | null
  }

  export type AttractionSumAggregateOutputType = {
    id: number | null
    destinationId: number | null
  }

  export type AttractionMinAggregateOutputType = {
    id: number | null
    name: string | null
    destinationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttractionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    destinationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttractionCountAggregateOutputType = {
    id: number
    name: number
    destinationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttractionAvgAggregateInputType = {
    id?: true
    destinationId?: true
  }

  export type AttractionSumAggregateInputType = {
    id?: true
    destinationId?: true
  }

  export type AttractionMinAggregateInputType = {
    id?: true
    name?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttractionMaxAggregateInputType = {
    id?: true
    name?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttractionCountAggregateInputType = {
    id?: true
    name?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttractionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attraction to aggregate.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: Enumerable<AttractionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attractions
    **/
    _count?: true | AttractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttractionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttractionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttractionMaxAggregateInputType
  }

  export type GetAttractionAggregateType<T extends AttractionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttraction[P]>
      : GetScalarType<T[P], AggregateAttraction[P]>
  }




  export type AttractionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AttractionWhereInput
    orderBy?: Enumerable<AttractionOrderByWithAggregationInput>
    by: AttractionScalarFieldEnum[]
    having?: AttractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttractionCountAggregateInputType | true
    _avg?: AttractionAvgAggregateInputType
    _sum?: AttractionSumAggregateInputType
    _min?: AttractionMinAggregateInputType
    _max?: AttractionMaxAggregateInputType
  }


  export type AttractionGroupByOutputType = {
    id: number
    name: string
    destinationId: number
    createdAt: Date
    updatedAt: Date
    _count: AttractionCountAggregateOutputType | null
    _avg: AttractionAvgAggregateOutputType | null
    _sum: AttractionSumAggregateOutputType | null
    _min: AttractionMinAggregateOutputType | null
    _max: AttractionMaxAggregateOutputType | null
  }

  type GetAttractionGroupByPayload<T extends AttractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AttractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttractionGroupByOutputType[P]>
            : GetScalarType<T[P], AttractionGroupByOutputType[P]>
        }
      >
    >


  export type AttractionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destination?: boolean | DestinationArgs<ExtArgs>
    images?: boolean | Attraction$imagesArgs<ExtArgs>
    _count?: boolean | AttractionCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["attraction"]>

  export type AttractionSelectScalar = {
    id?: boolean
    name?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttractionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationArgs<ExtArgs>
    images?: boolean | Attraction$imagesArgs<ExtArgs>
    _count?: boolean | AttractionCountOutputTypeArgs<ExtArgs>
  }


  type AttractionGetPayload<S extends boolean | null | undefined | AttractionArgs> = $Types.GetResult<AttractionPayload, S>

  type AttractionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AttractionFindManyArgs, 'select' | 'include'> & {
      select?: AttractionCountAggregateInputType | true
    }

  export interface AttractionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attraction'], meta: { name: 'Attraction' } }
    /**
     * Find zero or one Attraction that matches the filter.
     * @param {AttractionFindUniqueArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttractionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AttractionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Attraction'> extends True ? Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Attraction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttractionFindUniqueOrThrowArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttractionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Attraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindFirstArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttractionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AttractionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Attraction'> extends True ? Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Attraction that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindFirstOrThrowArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttractionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Attractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attractions
     * const attractions = await prisma.attraction.findMany()
     * 
     * // Get first 10 Attractions
     * const attractions = await prisma.attraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attractionWithIdOnly = await prisma.attraction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttractionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Attraction.
     * @param {AttractionCreateArgs} args - Arguments to create a Attraction.
     * @example
     * // Create one Attraction
     * const Attraction = await prisma.attraction.create({
     *   data: {
     *     // ... data to create a Attraction
     *   }
     * })
     * 
    **/
    create<T extends AttractionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionCreateArgs<ExtArgs>>
    ): Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Attractions.
     *     @param {AttractionCreateManyArgs} args - Arguments to create many Attractions.
     *     @example
     *     // Create many Attractions
     *     const attraction = await prisma.attraction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttractionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attraction.
     * @param {AttractionDeleteArgs} args - Arguments to delete one Attraction.
     * @example
     * // Delete one Attraction
     * const Attraction = await prisma.attraction.delete({
     *   where: {
     *     // ... filter to delete one Attraction
     *   }
     * })
     * 
    **/
    delete<T extends AttractionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionDeleteArgs<ExtArgs>>
    ): Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Attraction.
     * @param {AttractionUpdateArgs} args - Arguments to update one Attraction.
     * @example
     * // Update one Attraction
     * const attraction = await prisma.attraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttractionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionUpdateArgs<ExtArgs>>
    ): Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Attractions.
     * @param {AttractionDeleteManyArgs} args - Arguments to filter Attractions to delete.
     * @example
     * // Delete a few Attractions
     * const { count } = await prisma.attraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttractionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attractions
     * const attraction = await prisma.attraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttractionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attraction.
     * @param {AttractionUpsertArgs} args - Arguments to update or create a Attraction.
     * @example
     * // Update or create a Attraction
     * const attraction = await prisma.attraction.upsert({
     *   create: {
     *     // ... data to create a Attraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attraction we want to update
     *   }
     * })
    **/
    upsert<T extends AttractionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionUpsertArgs<ExtArgs>>
    ): Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Attractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionCountArgs} args - Arguments to filter Attractions to count.
     * @example
     * // Count the number of Attractions
     * const count = await prisma.attraction.count({
     *   where: {
     *     // ... the filter for the Attractions we want to count
     *   }
     * })
    **/
    count<T extends AttractionCountArgs>(
      args?: Subset<T, AttractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttractionAggregateArgs>(args: Subset<T, AttractionAggregateArgs>): Prisma.PrismaPromise<GetAttractionAggregateType<T>>

    /**
     * Group by Attraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionGroupByArgs} args - Group by arguments.
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
      T extends AttractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttractionGroupByArgs['orderBy'] }
        : { orderBy?: AttractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AttractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Attraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AttractionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    destination<T extends DestinationArgs<ExtArgs> = {}>(args?: Subset<T, DestinationArgs<ExtArgs>>): Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    images<T extends Attraction$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Attraction$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Attraction base type for findUnique actions
   */
  export type AttractionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction findUnique
   */
  export interface AttractionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AttractionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Attraction findUniqueOrThrow
   */
  export type AttractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where: AttractionWhereUniqueInput
  }


  /**
   * Attraction base type for findFirst actions
   */
  export type AttractionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: Enumerable<AttractionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attractions.
     */
    distinct?: Enumerable<AttractionScalarFieldEnum>
  }

  /**
   * Attraction findFirst
   */
  export interface AttractionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AttractionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Attraction findFirstOrThrow
   */
  export type AttractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: Enumerable<AttractionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attractions.
     */
    distinct?: Enumerable<AttractionScalarFieldEnum>
  }


  /**
   * Attraction findMany
   */
  export type AttractionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attractions to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: Enumerable<AttractionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    distinct?: Enumerable<AttractionScalarFieldEnum>
  }


  /**
   * Attraction create
   */
  export type AttractionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Attraction.
     */
    data: XOR<AttractionCreateInput, AttractionUncheckedCreateInput>
  }


  /**
   * Attraction createMany
   */
  export type AttractionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attractions.
     */
    data: Enumerable<AttractionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Attraction update
   */
  export type AttractionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Attraction.
     */
    data: XOR<AttractionUpdateInput, AttractionUncheckedUpdateInput>
    /**
     * Choose, which Attraction to update.
     */
    where: AttractionWhereUniqueInput
  }


  /**
   * Attraction updateMany
   */
  export type AttractionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attractions.
     */
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyInput>
    /**
     * Filter which Attractions to update
     */
    where?: AttractionWhereInput
  }


  /**
   * Attraction upsert
   */
  export type AttractionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Attraction to update in case it exists.
     */
    where: AttractionWhereUniqueInput
    /**
     * In case the Attraction found by the `where` argument doesn't exist, create a new Attraction with this data.
     */
    create: XOR<AttractionCreateInput, AttractionUncheckedCreateInput>
    /**
     * In case the Attraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttractionUpdateInput, AttractionUncheckedUpdateInput>
  }


  /**
   * Attraction delete
   */
  export type AttractionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter which Attraction to delete.
     */
    where: AttractionWhereUniqueInput
  }


  /**
   * Attraction deleteMany
   */
  export type AttractionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attractions to delete
     */
    where?: AttractionWhereInput
  }


  /**
   * Attraction.images
   */
  export type Attraction$imagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    where?: AttractionImageWhereInput
    orderBy?: Enumerable<AttractionImageOrderByWithRelationInput>
    cursor?: AttractionImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AttractionImageScalarFieldEnum>
  }


  /**
   * Attraction without action
   */
  export type AttractionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionInclude<ExtArgs> | null
  }



  /**
   * Model DestinationImage
   */


  export type AggregateDestinationImage = {
    _count: DestinationImageCountAggregateOutputType | null
    _avg: DestinationImageAvgAggregateOutputType | null
    _sum: DestinationImageSumAggregateOutputType | null
    _min: DestinationImageMinAggregateOutputType | null
    _max: DestinationImageMaxAggregateOutputType | null
  }

  export type DestinationImageAvgAggregateOutputType = {
    destinationId: number | null
  }

  export type DestinationImageSumAggregateOutputType = {
    destinationId: number | null
  }

  export type DestinationImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    destinationId: number | null
  }

  export type DestinationImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    destinationId: number | null
  }

  export type DestinationImageCountAggregateOutputType = {
    id: number
    url: number
    destinationId: number
    _all: number
  }


  export type DestinationImageAvgAggregateInputType = {
    destinationId?: true
  }

  export type DestinationImageSumAggregateInputType = {
    destinationId?: true
  }

  export type DestinationImageMinAggregateInputType = {
    id?: true
    url?: true
    destinationId?: true
  }

  export type DestinationImageMaxAggregateInputType = {
    id?: true
    url?: true
    destinationId?: true
  }

  export type DestinationImageCountAggregateInputType = {
    id?: true
    url?: true
    destinationId?: true
    _all?: true
  }

  export type DestinationImageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationImage to aggregate.
     */
    where?: DestinationImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationImages to fetch.
     */
    orderBy?: Enumerable<DestinationImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DestinationImages
    **/
    _count?: true | DestinationImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationImageMaxAggregateInputType
  }

  export type GetDestinationImageAggregateType<T extends DestinationImageAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinationImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinationImage[P]>
      : GetScalarType<T[P], AggregateDestinationImage[P]>
  }




  export type DestinationImageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DestinationImageWhereInput
    orderBy?: Enumerable<DestinationImageOrderByWithAggregationInput>
    by: DestinationImageScalarFieldEnum[]
    having?: DestinationImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationImageCountAggregateInputType | true
    _avg?: DestinationImageAvgAggregateInputType
    _sum?: DestinationImageSumAggregateInputType
    _min?: DestinationImageMinAggregateInputType
    _max?: DestinationImageMaxAggregateInputType
  }


  export type DestinationImageGroupByOutputType = {
    id: string
    url: string
    destinationId: number
    _count: DestinationImageCountAggregateOutputType | null
    _avg: DestinationImageAvgAggregateOutputType | null
    _sum: DestinationImageSumAggregateOutputType | null
    _min: DestinationImageMinAggregateOutputType | null
    _max: DestinationImageMaxAggregateOutputType | null
  }

  type GetDestinationImageGroupByPayload<T extends DestinationImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DestinationImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationImageGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationImageGroupByOutputType[P]>
        }
      >
    >


  export type DestinationImageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationArgs<ExtArgs>
  }, ExtArgs["result"]["destinationImage"]>

  export type DestinationImageSelectScalar = {
    id?: boolean
    url?: boolean
    destinationId?: boolean
  }

  export type DestinationImageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationArgs<ExtArgs>
  }


  type DestinationImageGetPayload<S extends boolean | null | undefined | DestinationImageArgs> = $Types.GetResult<DestinationImagePayload, S>

  type DestinationImageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DestinationImageFindManyArgs, 'select' | 'include'> & {
      select?: DestinationImageCountAggregateInputType | true
    }

  export interface DestinationImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DestinationImage'], meta: { name: 'DestinationImage' } }
    /**
     * Find zero or one DestinationImage that matches the filter.
     * @param {DestinationImageFindUniqueArgs} args - Arguments to find a DestinationImage
     * @example
     * // Get one DestinationImage
     * const destinationImage = await prisma.destinationImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DestinationImageFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DestinationImageFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DestinationImage'> extends True ? Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DestinationImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DestinationImageFindUniqueOrThrowArgs} args - Arguments to find a DestinationImage
     * @example
     * // Get one DestinationImage
     * const destinationImage = await prisma.destinationImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DestinationImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DestinationImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageFindFirstArgs} args - Arguments to find a DestinationImage
     * @example
     * // Get one DestinationImage
     * const destinationImage = await prisma.destinationImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DestinationImageFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DestinationImageFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DestinationImage'> extends True ? Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DestinationImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageFindFirstOrThrowArgs} args - Arguments to find a DestinationImage
     * @example
     * // Get one DestinationImage
     * const destinationImage = await prisma.destinationImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DestinationImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DestinationImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinationImages
     * const destinationImages = await prisma.destinationImage.findMany()
     * 
     * // Get first 10 DestinationImages
     * const destinationImages = await prisma.destinationImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationImageWithIdOnly = await prisma.destinationImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DestinationImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DestinationImage.
     * @param {DestinationImageCreateArgs} args - Arguments to create a DestinationImage.
     * @example
     * // Create one DestinationImage
     * const DestinationImage = await prisma.destinationImage.create({
     *   data: {
     *     // ... data to create a DestinationImage
     *   }
     * })
     * 
    **/
    create<T extends DestinationImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationImageCreateArgs<ExtArgs>>
    ): Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DestinationImages.
     *     @param {DestinationImageCreateManyArgs} args - Arguments to create many DestinationImages.
     *     @example
     *     // Create many DestinationImages
     *     const destinationImage = await prisma.destinationImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DestinationImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DestinationImage.
     * @param {DestinationImageDeleteArgs} args - Arguments to delete one DestinationImage.
     * @example
     * // Delete one DestinationImage
     * const DestinationImage = await prisma.destinationImage.delete({
     *   where: {
     *     // ... filter to delete one DestinationImage
     *   }
     * })
     * 
    **/
    delete<T extends DestinationImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationImageDeleteArgs<ExtArgs>>
    ): Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DestinationImage.
     * @param {DestinationImageUpdateArgs} args - Arguments to update one DestinationImage.
     * @example
     * // Update one DestinationImage
     * const destinationImage = await prisma.destinationImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DestinationImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationImageUpdateArgs<ExtArgs>>
    ): Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DestinationImages.
     * @param {DestinationImageDeleteManyArgs} args - Arguments to filter DestinationImages to delete.
     * @example
     * // Delete a few DestinationImages
     * const { count } = await prisma.destinationImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DestinationImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DestinationImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinationImages
     * const destinationImage = await prisma.destinationImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DestinationImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DestinationImage.
     * @param {DestinationImageUpsertArgs} args - Arguments to update or create a DestinationImage.
     * @example
     * // Update or create a DestinationImage
     * const destinationImage = await prisma.destinationImage.upsert({
     *   create: {
     *     // ... data to create a DestinationImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinationImage we want to update
     *   }
     * })
    **/
    upsert<T extends DestinationImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DestinationImageUpsertArgs<ExtArgs>>
    ): Prisma__DestinationImageClient<$Types.GetResult<DestinationImagePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DestinationImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageCountArgs} args - Arguments to filter DestinationImages to count.
     * @example
     * // Count the number of DestinationImages
     * const count = await prisma.destinationImage.count({
     *   where: {
     *     // ... the filter for the DestinationImages we want to count
     *   }
     * })
    **/
    count<T extends DestinationImageCountArgs>(
      args?: Subset<T, DestinationImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DestinationImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinationImageAggregateArgs>(args: Subset<T, DestinationImageAggregateArgs>): Prisma.PrismaPromise<GetDestinationImageAggregateType<T>>

    /**
     * Group by DestinationImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageGroupByArgs} args - Group by arguments.
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
      T extends DestinationImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationImageGroupByArgs['orderBy'] }
        : { orderBy?: DestinationImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DestinationImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DestinationImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DestinationImageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    destination<T extends DestinationArgs<ExtArgs> = {}>(args?: Subset<T, DestinationArgs<ExtArgs>>): Prisma__DestinationClient<$Types.GetResult<DestinationPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DestinationImage base type for findUnique actions
   */
  export type DestinationImageFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImage to fetch.
     */
    where: DestinationImageWhereUniqueInput
  }

  /**
   * DestinationImage findUnique
   */
  export interface DestinationImageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DestinationImageFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DestinationImage findUniqueOrThrow
   */
  export type DestinationImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImage to fetch.
     */
    where: DestinationImageWhereUniqueInput
  }


  /**
   * DestinationImage base type for findFirst actions
   */
  export type DestinationImageFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImage to fetch.
     */
    where?: DestinationImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationImages to fetch.
     */
    orderBy?: Enumerable<DestinationImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationImages.
     */
    cursor?: DestinationImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationImages.
     */
    distinct?: Enumerable<DestinationImageScalarFieldEnum>
  }

  /**
   * DestinationImage findFirst
   */
  export interface DestinationImageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DestinationImageFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DestinationImage findFirstOrThrow
   */
  export type DestinationImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImage to fetch.
     */
    where?: DestinationImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationImages to fetch.
     */
    orderBy?: Enumerable<DestinationImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationImages.
     */
    cursor?: DestinationImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationImages.
     */
    distinct?: Enumerable<DestinationImageScalarFieldEnum>
  }


  /**
   * DestinationImage findMany
   */
  export type DestinationImageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImages to fetch.
     */
    where?: DestinationImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationImages to fetch.
     */
    orderBy?: Enumerable<DestinationImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DestinationImages.
     */
    cursor?: DestinationImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationImages.
     */
    skip?: number
    distinct?: Enumerable<DestinationImageScalarFieldEnum>
  }


  /**
   * DestinationImage create
   */
  export type DestinationImageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * The data needed to create a DestinationImage.
     */
    data: XOR<DestinationImageCreateInput, DestinationImageUncheckedCreateInput>
  }


  /**
   * DestinationImage createMany
   */
  export type DestinationImageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DestinationImages.
     */
    data: Enumerable<DestinationImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DestinationImage update
   */
  export type DestinationImageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * The data needed to update a DestinationImage.
     */
    data: XOR<DestinationImageUpdateInput, DestinationImageUncheckedUpdateInput>
    /**
     * Choose, which DestinationImage to update.
     */
    where: DestinationImageWhereUniqueInput
  }


  /**
   * DestinationImage updateMany
   */
  export type DestinationImageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DestinationImages.
     */
    data: XOR<DestinationImageUpdateManyMutationInput, DestinationImageUncheckedUpdateManyInput>
    /**
     * Filter which DestinationImages to update
     */
    where?: DestinationImageWhereInput
  }


  /**
   * DestinationImage upsert
   */
  export type DestinationImageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * The filter to search for the DestinationImage to update in case it exists.
     */
    where: DestinationImageWhereUniqueInput
    /**
     * In case the DestinationImage found by the `where` argument doesn't exist, create a new DestinationImage with this data.
     */
    create: XOR<DestinationImageCreateInput, DestinationImageUncheckedCreateInput>
    /**
     * In case the DestinationImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationImageUpdateInput, DestinationImageUncheckedUpdateInput>
  }


  /**
   * DestinationImage delete
   */
  export type DestinationImageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter which DestinationImage to delete.
     */
    where: DestinationImageWhereUniqueInput
  }


  /**
   * DestinationImage deleteMany
   */
  export type DestinationImageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationImages to delete
     */
    where?: DestinationImageWhereInput
  }


  /**
   * DestinationImage without action
   */
  export type DestinationImageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DestinationImageInclude<ExtArgs> | null
  }



  /**
   * Model AttractionImage
   */


  export type AggregateAttractionImage = {
    _count: AttractionImageCountAggregateOutputType | null
    _avg: AttractionImageAvgAggregateOutputType | null
    _sum: AttractionImageSumAggregateOutputType | null
    _min: AttractionImageMinAggregateOutputType | null
    _max: AttractionImageMaxAggregateOutputType | null
  }

  export type AttractionImageAvgAggregateOutputType = {
    attractionId: number | null
  }

  export type AttractionImageSumAggregateOutputType = {
    attractionId: number | null
  }

  export type AttractionImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    attractionId: number | null
  }

  export type AttractionImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    attractionId: number | null
  }

  export type AttractionImageCountAggregateOutputType = {
    id: number
    url: number
    attractionId: number
    _all: number
  }


  export type AttractionImageAvgAggregateInputType = {
    attractionId?: true
  }

  export type AttractionImageSumAggregateInputType = {
    attractionId?: true
  }

  export type AttractionImageMinAggregateInputType = {
    id?: true
    url?: true
    attractionId?: true
  }

  export type AttractionImageMaxAggregateInputType = {
    id?: true
    url?: true
    attractionId?: true
  }

  export type AttractionImageCountAggregateInputType = {
    id?: true
    url?: true
    attractionId?: true
    _all?: true
  }

  export type AttractionImageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttractionImage to aggregate.
     */
    where?: AttractionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttractionImages to fetch.
     */
    orderBy?: Enumerable<AttractionImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttractionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttractionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttractionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttractionImages
    **/
    _count?: true | AttractionImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttractionImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttractionImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttractionImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttractionImageMaxAggregateInputType
  }

  export type GetAttractionImageAggregateType<T extends AttractionImageAggregateArgs> = {
        [P in keyof T & keyof AggregateAttractionImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttractionImage[P]>
      : GetScalarType<T[P], AggregateAttractionImage[P]>
  }




  export type AttractionImageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AttractionImageWhereInput
    orderBy?: Enumerable<AttractionImageOrderByWithAggregationInput>
    by: AttractionImageScalarFieldEnum[]
    having?: AttractionImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttractionImageCountAggregateInputType | true
    _avg?: AttractionImageAvgAggregateInputType
    _sum?: AttractionImageSumAggregateInputType
    _min?: AttractionImageMinAggregateInputType
    _max?: AttractionImageMaxAggregateInputType
  }


  export type AttractionImageGroupByOutputType = {
    id: string
    url: string
    attractionId: number
    _count: AttractionImageCountAggregateOutputType | null
    _avg: AttractionImageAvgAggregateOutputType | null
    _sum: AttractionImageSumAggregateOutputType | null
    _min: AttractionImageMinAggregateOutputType | null
    _max: AttractionImageMaxAggregateOutputType | null
  }

  type GetAttractionImageGroupByPayload<T extends AttractionImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AttractionImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttractionImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttractionImageGroupByOutputType[P]>
            : GetScalarType<T[P], AttractionImageGroupByOutputType[P]>
        }
      >
    >


  export type AttractionImageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    attractionId?: boolean
    attraction?: boolean | AttractionArgs<ExtArgs>
  }, ExtArgs["result"]["attractionImage"]>

  export type AttractionImageSelectScalar = {
    id?: boolean
    url?: boolean
    attractionId?: boolean
  }

  export type AttractionImageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    attraction?: boolean | AttractionArgs<ExtArgs>
  }


  type AttractionImageGetPayload<S extends boolean | null | undefined | AttractionImageArgs> = $Types.GetResult<AttractionImagePayload, S>

  type AttractionImageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AttractionImageFindManyArgs, 'select' | 'include'> & {
      select?: AttractionImageCountAggregateInputType | true
    }

  export interface AttractionImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttractionImage'], meta: { name: 'AttractionImage' } }
    /**
     * Find zero or one AttractionImage that matches the filter.
     * @param {AttractionImageFindUniqueArgs} args - Arguments to find a AttractionImage
     * @example
     * // Get one AttractionImage
     * const attractionImage = await prisma.attractionImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttractionImageFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AttractionImageFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AttractionImage'> extends True ? Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one AttractionImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttractionImageFindUniqueOrThrowArgs} args - Arguments to find a AttractionImage
     * @example
     * // Get one AttractionImage
     * const attractionImage = await prisma.attractionImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttractionImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first AttractionImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionImageFindFirstArgs} args - Arguments to find a AttractionImage
     * @example
     * // Get one AttractionImage
     * const attractionImage = await prisma.attractionImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttractionImageFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AttractionImageFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AttractionImage'> extends True ? Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first AttractionImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionImageFindFirstOrThrowArgs} args - Arguments to find a AttractionImage
     * @example
     * // Get one AttractionImage
     * const attractionImage = await prisma.attractionImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttractionImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more AttractionImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttractionImages
     * const attractionImages = await prisma.attractionImage.findMany()
     * 
     * // Get first 10 AttractionImages
     * const attractionImages = await prisma.attractionImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attractionImageWithIdOnly = await prisma.attractionImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttractionImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a AttractionImage.
     * @param {AttractionImageCreateArgs} args - Arguments to create a AttractionImage.
     * @example
     * // Create one AttractionImage
     * const AttractionImage = await prisma.attractionImage.create({
     *   data: {
     *     // ... data to create a AttractionImage
     *   }
     * })
     * 
    **/
    create<T extends AttractionImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionImageCreateArgs<ExtArgs>>
    ): Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many AttractionImages.
     *     @param {AttractionImageCreateManyArgs} args - Arguments to create many AttractionImages.
     *     @example
     *     // Create many AttractionImages
     *     const attractionImage = await prisma.attractionImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttractionImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AttractionImage.
     * @param {AttractionImageDeleteArgs} args - Arguments to delete one AttractionImage.
     * @example
     * // Delete one AttractionImage
     * const AttractionImage = await prisma.attractionImage.delete({
     *   where: {
     *     // ... filter to delete one AttractionImage
     *   }
     * })
     * 
    **/
    delete<T extends AttractionImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionImageDeleteArgs<ExtArgs>>
    ): Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one AttractionImage.
     * @param {AttractionImageUpdateArgs} args - Arguments to update one AttractionImage.
     * @example
     * // Update one AttractionImage
     * const attractionImage = await prisma.attractionImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttractionImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionImageUpdateArgs<ExtArgs>>
    ): Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more AttractionImages.
     * @param {AttractionImageDeleteManyArgs} args - Arguments to filter AttractionImages to delete.
     * @example
     * // Delete a few AttractionImages
     * const { count } = await prisma.attractionImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttractionImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttractionImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttractionImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttractionImages
     * const attractionImage = await prisma.attractionImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttractionImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttractionImage.
     * @param {AttractionImageUpsertArgs} args - Arguments to update or create a AttractionImage.
     * @example
     * // Update or create a AttractionImage
     * const attractionImage = await prisma.attractionImage.upsert({
     *   create: {
     *     // ... data to create a AttractionImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttractionImage we want to update
     *   }
     * })
    **/
    upsert<T extends AttractionImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttractionImageUpsertArgs<ExtArgs>>
    ): Prisma__AttractionImageClient<$Types.GetResult<AttractionImagePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of AttractionImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionImageCountArgs} args - Arguments to filter AttractionImages to count.
     * @example
     * // Count the number of AttractionImages
     * const count = await prisma.attractionImage.count({
     *   where: {
     *     // ... the filter for the AttractionImages we want to count
     *   }
     * })
    **/
    count<T extends AttractionImageCountArgs>(
      args?: Subset<T, AttractionImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttractionImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttractionImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttractionImageAggregateArgs>(args: Subset<T, AttractionImageAggregateArgs>): Prisma.PrismaPromise<GetAttractionImageAggregateType<T>>

    /**
     * Group by AttractionImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionImageGroupByArgs} args - Group by arguments.
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
      T extends AttractionImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttractionImageGroupByArgs['orderBy'] }
        : { orderBy?: AttractionImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AttractionImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttractionImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AttractionImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AttractionImageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    attraction<T extends AttractionArgs<ExtArgs> = {}>(args?: Subset<T, AttractionArgs<ExtArgs>>): Prisma__AttractionClient<$Types.GetResult<AttractionPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AttractionImage base type for findUnique actions
   */
  export type AttractionImageFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * Filter, which AttractionImage to fetch.
     */
    where: AttractionImageWhereUniqueInput
  }

  /**
   * AttractionImage findUnique
   */
  export interface AttractionImageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AttractionImageFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AttractionImage findUniqueOrThrow
   */
  export type AttractionImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * Filter, which AttractionImage to fetch.
     */
    where: AttractionImageWhereUniqueInput
  }


  /**
   * AttractionImage base type for findFirst actions
   */
  export type AttractionImageFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * Filter, which AttractionImage to fetch.
     */
    where?: AttractionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttractionImages to fetch.
     */
    orderBy?: Enumerable<AttractionImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttractionImages.
     */
    cursor?: AttractionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttractionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttractionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttractionImages.
     */
    distinct?: Enumerable<AttractionImageScalarFieldEnum>
  }

  /**
   * AttractionImage findFirst
   */
  export interface AttractionImageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AttractionImageFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AttractionImage findFirstOrThrow
   */
  export type AttractionImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * Filter, which AttractionImage to fetch.
     */
    where?: AttractionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttractionImages to fetch.
     */
    orderBy?: Enumerable<AttractionImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttractionImages.
     */
    cursor?: AttractionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttractionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttractionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttractionImages.
     */
    distinct?: Enumerable<AttractionImageScalarFieldEnum>
  }


  /**
   * AttractionImage findMany
   */
  export type AttractionImageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * Filter, which AttractionImages to fetch.
     */
    where?: AttractionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttractionImages to fetch.
     */
    orderBy?: Enumerable<AttractionImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttractionImages.
     */
    cursor?: AttractionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttractionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttractionImages.
     */
    skip?: number
    distinct?: Enumerable<AttractionImageScalarFieldEnum>
  }


  /**
   * AttractionImage create
   */
  export type AttractionImageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * The data needed to create a AttractionImage.
     */
    data: XOR<AttractionImageCreateInput, AttractionImageUncheckedCreateInput>
  }


  /**
   * AttractionImage createMany
   */
  export type AttractionImageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttractionImages.
     */
    data: Enumerable<AttractionImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AttractionImage update
   */
  export type AttractionImageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * The data needed to update a AttractionImage.
     */
    data: XOR<AttractionImageUpdateInput, AttractionImageUncheckedUpdateInput>
    /**
     * Choose, which AttractionImage to update.
     */
    where: AttractionImageWhereUniqueInput
  }


  /**
   * AttractionImage updateMany
   */
  export type AttractionImageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttractionImages.
     */
    data: XOR<AttractionImageUpdateManyMutationInput, AttractionImageUncheckedUpdateManyInput>
    /**
     * Filter which AttractionImages to update
     */
    where?: AttractionImageWhereInput
  }


  /**
   * AttractionImage upsert
   */
  export type AttractionImageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * The filter to search for the AttractionImage to update in case it exists.
     */
    where: AttractionImageWhereUniqueInput
    /**
     * In case the AttractionImage found by the `where` argument doesn't exist, create a new AttractionImage with this data.
     */
    create: XOR<AttractionImageCreateInput, AttractionImageUncheckedCreateInput>
    /**
     * In case the AttractionImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttractionImageUpdateInput, AttractionImageUncheckedUpdateInput>
  }


  /**
   * AttractionImage delete
   */
  export type AttractionImageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
    /**
     * Filter which AttractionImage to delete.
     */
    where: AttractionImageWhereUniqueInput
  }


  /**
   * AttractionImage deleteMany
   */
  export type AttractionImageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttractionImages to delete
     */
    where?: AttractionImageWhereInput
  }


  /**
   * AttractionImage without action
   */
  export type AttractionImageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttractionImage
     */
    select?: AttractionImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttractionImageInclude<ExtArgs> | null
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


  export const CountryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region',
    countryId: 'countryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const AttractionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    destinationId: 'destinationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttractionScalarFieldEnum = (typeof AttractionScalarFieldEnum)[keyof typeof AttractionScalarFieldEnum]


  export const DestinationImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    destinationId: 'destinationId'
  };

  export type DestinationImageScalarFieldEnum = (typeof DestinationImageScalarFieldEnum)[keyof typeof DestinationImageScalarFieldEnum]


  export const AttractionImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    attractionId: 'attractionId'
  };

  export type AttractionImageScalarFieldEnum = (typeof AttractionImageScalarFieldEnum)[keyof typeof AttractionImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: Enumerable<CountryWhereInput>
    OR?: Enumerable<CountryWhereInput>
    NOT?: Enumerable<CountryWhereInput>
    id?: IntFilter | number
    code?: StringFilter | string
    name?: StringFilter | string
    destinations?: DestinationListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    destinations?: DestinationOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = {
    id?: number
    code?: string
  }

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CountryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CountryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CountryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type DestinationWhereInput = {
    AND?: Enumerable<DestinationWhereInput>
    OR?: Enumerable<DestinationWhereInput>
    NOT?: Enumerable<DestinationWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    region?: StringFilter | string
    countryId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    attractions?: AttractionListRelationFilter
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    images?: DestinationImageListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attractions?: AttractionOrderByRelationAggregateInput
    country?: CountryOrderByWithRelationInput
    images?: DestinationImageOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _avg?: DestinationAvgOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
    _sum?: DestinationSumOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DestinationScalarWhereWithAggregatesInput>
    OR?: Enumerable<DestinationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DestinationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    region?: StringWithAggregatesFilter | string
    countryId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AttractionWhereInput = {
    AND?: Enumerable<AttractionWhereInput>
    OR?: Enumerable<AttractionWhereInput>
    NOT?: Enumerable<AttractionWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    destinationId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    destination?: XOR<DestinationRelationFilter, DestinationWhereInput>
    images?: AttractionImageListRelationFilter
  }

  export type AttractionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    destination?: DestinationOrderByWithRelationInput
    images?: AttractionImageOrderByRelationAggregateInput
  }

  export type AttractionWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type AttractionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttractionCountOrderByAggregateInput
    _avg?: AttractionAvgOrderByAggregateInput
    _max?: AttractionMaxOrderByAggregateInput
    _min?: AttractionMinOrderByAggregateInput
    _sum?: AttractionSumOrderByAggregateInput
  }

  export type AttractionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AttractionScalarWhereWithAggregatesInput>
    OR?: Enumerable<AttractionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AttractionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    destinationId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DestinationImageWhereInput = {
    AND?: Enumerable<DestinationImageWhereInput>
    OR?: Enumerable<DestinationImageWhereInput>
    NOT?: Enumerable<DestinationImageWhereInput>
    id?: StringFilter | string
    url?: StringFilter | string
    destinationId?: IntFilter | number
    destination?: XOR<DestinationRelationFilter, DestinationWhereInput>
  }

  export type DestinationImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
    destination?: DestinationOrderByWithRelationInput
  }

  export type DestinationImageWhereUniqueInput = {
    id?: string
  }

  export type DestinationImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
    _count?: DestinationImageCountOrderByAggregateInput
    _avg?: DestinationImageAvgOrderByAggregateInput
    _max?: DestinationImageMaxOrderByAggregateInput
    _min?: DestinationImageMinOrderByAggregateInput
    _sum?: DestinationImageSumOrderByAggregateInput
  }

  export type DestinationImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DestinationImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<DestinationImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DestinationImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    destinationId?: IntWithAggregatesFilter | number
  }

  export type AttractionImageWhereInput = {
    AND?: Enumerable<AttractionImageWhereInput>
    OR?: Enumerable<AttractionImageWhereInput>
    NOT?: Enumerable<AttractionImageWhereInput>
    id?: StringFilter | string
    url?: StringFilter | string
    attractionId?: IntFilter | number
    attraction?: XOR<AttractionRelationFilter, AttractionWhereInput>
  }

  export type AttractionImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    attractionId?: SortOrder
    attraction?: AttractionOrderByWithRelationInput
  }

  export type AttractionImageWhereUniqueInput = {
    id?: string
  }

  export type AttractionImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    attractionId?: SortOrder
    _count?: AttractionImageCountOrderByAggregateInput
    _avg?: AttractionImageAvgOrderByAggregateInput
    _max?: AttractionImageMaxOrderByAggregateInput
    _min?: AttractionImageMinOrderByAggregateInput
    _sum?: AttractionImageSumOrderByAggregateInput
  }

  export type AttractionImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AttractionImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<AttractionImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AttractionImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    attractionId?: IntWithAggregatesFilter | number
  }

  export type CountryCreateInput = {
    code: string
    name: string
    destinations?: DestinationCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    destinations?: DestinationUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destinations?: DestinationUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destinations?: DestinationUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    code: string
    name: string
  }

  export type CountryUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationCreateInput = {
    name: string
    region: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionCreateNestedManyWithoutDestinationInput
    country: CountryCreateNestedOneWithoutDestinationsInput
    images?: DestinationImageCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: number
    name: string
    region: string
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutDestinationInput
    images?: DestinationImageUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUpdateManyWithoutDestinationNestedInput
    country?: CountryUpdateOneRequiredWithoutDestinationsNestedInput
    images?: DestinationImageUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutDestinationNestedInput
    images?: DestinationImageUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: number
    name: string
    region: string
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    destination: DestinationCreateNestedOneWithoutAttractionsInput
    images?: AttractionImageCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateInput = {
    id?: number
    name: string
    destinationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: AttractionImageUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutAttractionsNestedInput
    images?: AttractionImageUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    destinationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: AttractionImageUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionCreateManyInput = {
    id?: number
    name: string
    destinationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    destinationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationImageCreateInput = {
    id?: string
    url: string
    destination: DestinationCreateNestedOneWithoutImagesInput
  }

  export type DestinationImageUncheckedCreateInput = {
    id?: string
    url: string
    destinationId: number
  }

  export type DestinationImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    destination?: DestinationUpdateOneRequiredWithoutImagesNestedInput
  }

  export type DestinationImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type DestinationImageCreateManyInput = {
    id?: string
    url: string
    destinationId: number
  }

  export type DestinationImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type AttractionImageCreateInput = {
    id?: string
    url: string
    attraction: AttractionCreateNestedOneWithoutImagesInput
  }

  export type AttractionImageUncheckedCreateInput = {
    id?: string
    url: string
    attractionId: number
  }

  export type AttractionImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    attraction?: AttractionUpdateOneRequiredWithoutImagesNestedInput
  }

  export type AttractionImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    attractionId?: IntFieldUpdateOperationsInput | number
  }

  export type AttractionImageCreateManyInput = {
    id?: string
    url: string
    attractionId: number
  }

  export type AttractionImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AttractionImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    attractionId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DestinationListRelationFilter = {
    every?: DestinationWhereInput
    some?: DestinationWhereInput
    none?: DestinationWhereInput
  }

  export type DestinationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type AttractionListRelationFilter = {
    every?: AttractionWhereInput
    some?: AttractionWhereInput
    none?: AttractionWhereInput
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type DestinationImageListRelationFilter = {
    every?: DestinationImageWhereInput
    some?: DestinationImageWhereInput
    none?: DestinationImageWhereInput
  }

  export type AttractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationAvgOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationSumOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DestinationRelationFilter = {
    is?: DestinationWhereInput | null
    isNot?: DestinationWhereInput | null
  }

  export type AttractionImageListRelationFilter = {
    every?: AttractionImageWhereInput
    some?: AttractionImageWhereInput
    none?: AttractionImageWhereInput
  }

  export type AttractionImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttractionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionAvgOrderByAggregateInput = {
    id?: SortOrder
    destinationId?: SortOrder
  }

  export type AttractionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionSumOrderByAggregateInput = {
    id?: SortOrder
    destinationId?: SortOrder
  }

  export type DestinationImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
  }

  export type DestinationImageAvgOrderByAggregateInput = {
    destinationId?: SortOrder
  }

  export type DestinationImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
  }

  export type DestinationImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
  }

  export type DestinationImageSumOrderByAggregateInput = {
    destinationId?: SortOrder
  }

  export type AttractionRelationFilter = {
    is?: AttractionWhereInput | null
    isNot?: AttractionWhereInput | null
  }

  export type AttractionImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    attractionId?: SortOrder
  }

  export type AttractionImageAvgOrderByAggregateInput = {
    attractionId?: SortOrder
  }

  export type AttractionImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    attractionId?: SortOrder
  }

  export type AttractionImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    attractionId?: SortOrder
  }

  export type AttractionImageSumOrderByAggregateInput = {
    attractionId?: SortOrder
  }

  export type DestinationCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<DestinationCreateWithoutCountryInput>, Enumerable<DestinationUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<DestinationCreateOrConnectWithoutCountryInput>
    createMany?: DestinationCreateManyCountryInputEnvelope
    connect?: Enumerable<DestinationWhereUniqueInput>
  }

  export type DestinationUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<DestinationCreateWithoutCountryInput>, Enumerable<DestinationUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<DestinationCreateOrConnectWithoutCountryInput>
    createMany?: DestinationCreateManyCountryInputEnvelope
    connect?: Enumerable<DestinationWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DestinationUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<DestinationCreateWithoutCountryInput>, Enumerable<DestinationUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<DestinationCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<DestinationUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: DestinationCreateManyCountryInputEnvelope
    set?: Enumerable<DestinationWhereUniqueInput>
    disconnect?: Enumerable<DestinationWhereUniqueInput>
    delete?: Enumerable<DestinationWhereUniqueInput>
    connect?: Enumerable<DestinationWhereUniqueInput>
    update?: Enumerable<DestinationUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<DestinationUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<DestinationScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DestinationUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<DestinationCreateWithoutCountryInput>, Enumerable<DestinationUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<DestinationCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<DestinationUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: DestinationCreateManyCountryInputEnvelope
    set?: Enumerable<DestinationWhereUniqueInput>
    disconnect?: Enumerable<DestinationWhereUniqueInput>
    delete?: Enumerable<DestinationWhereUniqueInput>
    connect?: Enumerable<DestinationWhereUniqueInput>
    update?: Enumerable<DestinationUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<DestinationUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<DestinationScalarWhereInput>
  }

  export type AttractionCreateNestedManyWithoutDestinationInput = {
    create?: XOR<Enumerable<AttractionCreateWithoutDestinationInput>, Enumerable<AttractionUncheckedCreateWithoutDestinationInput>>
    connectOrCreate?: Enumerable<AttractionCreateOrConnectWithoutDestinationInput>
    createMany?: AttractionCreateManyDestinationInputEnvelope
    connect?: Enumerable<AttractionWhereUniqueInput>
  }

  export type CountryCreateNestedOneWithoutDestinationsInput = {
    create?: XOR<CountryCreateWithoutDestinationsInput, CountryUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutDestinationsInput
    connect?: CountryWhereUniqueInput
  }

  export type DestinationImageCreateNestedManyWithoutDestinationInput = {
    create?: XOR<Enumerable<DestinationImageCreateWithoutDestinationInput>, Enumerable<DestinationImageUncheckedCreateWithoutDestinationInput>>
    connectOrCreate?: Enumerable<DestinationImageCreateOrConnectWithoutDestinationInput>
    createMany?: DestinationImageCreateManyDestinationInputEnvelope
    connect?: Enumerable<DestinationImageWhereUniqueInput>
  }

  export type AttractionUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<Enumerable<AttractionCreateWithoutDestinationInput>, Enumerable<AttractionUncheckedCreateWithoutDestinationInput>>
    connectOrCreate?: Enumerable<AttractionCreateOrConnectWithoutDestinationInput>
    createMany?: AttractionCreateManyDestinationInputEnvelope
    connect?: Enumerable<AttractionWhereUniqueInput>
  }

  export type DestinationImageUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<Enumerable<DestinationImageCreateWithoutDestinationInput>, Enumerable<DestinationImageUncheckedCreateWithoutDestinationInput>>
    connectOrCreate?: Enumerable<DestinationImageCreateOrConnectWithoutDestinationInput>
    createMany?: DestinationImageCreateManyDestinationInputEnvelope
    connect?: Enumerable<DestinationImageWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AttractionUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<Enumerable<AttractionCreateWithoutDestinationInput>, Enumerable<AttractionUncheckedCreateWithoutDestinationInput>>
    connectOrCreate?: Enumerable<AttractionCreateOrConnectWithoutDestinationInput>
    upsert?: Enumerable<AttractionUpsertWithWhereUniqueWithoutDestinationInput>
    createMany?: AttractionCreateManyDestinationInputEnvelope
    set?: Enumerable<AttractionWhereUniqueInput>
    disconnect?: Enumerable<AttractionWhereUniqueInput>
    delete?: Enumerable<AttractionWhereUniqueInput>
    connect?: Enumerable<AttractionWhereUniqueInput>
    update?: Enumerable<AttractionUpdateWithWhereUniqueWithoutDestinationInput>
    updateMany?: Enumerable<AttractionUpdateManyWithWhereWithoutDestinationInput>
    deleteMany?: Enumerable<AttractionScalarWhereInput>
  }

  export type CountryUpdateOneRequiredWithoutDestinationsNestedInput = {
    create?: XOR<CountryCreateWithoutDestinationsInput, CountryUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutDestinationsInput
    upsert?: CountryUpsertWithoutDestinationsInput
    connect?: CountryWhereUniqueInput
    update?: XOR<CountryUpdateWithoutDestinationsInput, CountryUncheckedUpdateWithoutDestinationsInput>
  }

  export type DestinationImageUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<Enumerable<DestinationImageCreateWithoutDestinationInput>, Enumerable<DestinationImageUncheckedCreateWithoutDestinationInput>>
    connectOrCreate?: Enumerable<DestinationImageCreateOrConnectWithoutDestinationInput>
    upsert?: Enumerable<DestinationImageUpsertWithWhereUniqueWithoutDestinationInput>
    createMany?: DestinationImageCreateManyDestinationInputEnvelope
    set?: Enumerable<DestinationImageWhereUniqueInput>
    disconnect?: Enumerable<DestinationImageWhereUniqueInput>
    delete?: Enumerable<DestinationImageWhereUniqueInput>
    connect?: Enumerable<DestinationImageWhereUniqueInput>
    update?: Enumerable<DestinationImageUpdateWithWhereUniqueWithoutDestinationInput>
    updateMany?: Enumerable<DestinationImageUpdateManyWithWhereWithoutDestinationInput>
    deleteMany?: Enumerable<DestinationImageScalarWhereInput>
  }

  export type AttractionUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<Enumerable<AttractionCreateWithoutDestinationInput>, Enumerable<AttractionUncheckedCreateWithoutDestinationInput>>
    connectOrCreate?: Enumerable<AttractionCreateOrConnectWithoutDestinationInput>
    upsert?: Enumerable<AttractionUpsertWithWhereUniqueWithoutDestinationInput>
    createMany?: AttractionCreateManyDestinationInputEnvelope
    set?: Enumerable<AttractionWhereUniqueInput>
    disconnect?: Enumerable<AttractionWhereUniqueInput>
    delete?: Enumerable<AttractionWhereUniqueInput>
    connect?: Enumerable<AttractionWhereUniqueInput>
    update?: Enumerable<AttractionUpdateWithWhereUniqueWithoutDestinationInput>
    updateMany?: Enumerable<AttractionUpdateManyWithWhereWithoutDestinationInput>
    deleteMany?: Enumerable<AttractionScalarWhereInput>
  }

  export type DestinationImageUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<Enumerable<DestinationImageCreateWithoutDestinationInput>, Enumerable<DestinationImageUncheckedCreateWithoutDestinationInput>>
    connectOrCreate?: Enumerable<DestinationImageCreateOrConnectWithoutDestinationInput>
    upsert?: Enumerable<DestinationImageUpsertWithWhereUniqueWithoutDestinationInput>
    createMany?: DestinationImageCreateManyDestinationInputEnvelope
    set?: Enumerable<DestinationImageWhereUniqueInput>
    disconnect?: Enumerable<DestinationImageWhereUniqueInput>
    delete?: Enumerable<DestinationImageWhereUniqueInput>
    connect?: Enumerable<DestinationImageWhereUniqueInput>
    update?: Enumerable<DestinationImageUpdateWithWhereUniqueWithoutDestinationInput>
    updateMany?: Enumerable<DestinationImageUpdateManyWithWhereWithoutDestinationInput>
    deleteMany?: Enumerable<DestinationImageScalarWhereInput>
  }

  export type DestinationCreateNestedOneWithoutAttractionsInput = {
    create?: XOR<DestinationCreateWithoutAttractionsInput, DestinationUncheckedCreateWithoutAttractionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutAttractionsInput
    connect?: DestinationWhereUniqueInput
  }

  export type AttractionImageCreateNestedManyWithoutAttractionInput = {
    create?: XOR<Enumerable<AttractionImageCreateWithoutAttractionInput>, Enumerable<AttractionImageUncheckedCreateWithoutAttractionInput>>
    connectOrCreate?: Enumerable<AttractionImageCreateOrConnectWithoutAttractionInput>
    createMany?: AttractionImageCreateManyAttractionInputEnvelope
    connect?: Enumerable<AttractionImageWhereUniqueInput>
  }

  export type AttractionImageUncheckedCreateNestedManyWithoutAttractionInput = {
    create?: XOR<Enumerable<AttractionImageCreateWithoutAttractionInput>, Enumerable<AttractionImageUncheckedCreateWithoutAttractionInput>>
    connectOrCreate?: Enumerable<AttractionImageCreateOrConnectWithoutAttractionInput>
    createMany?: AttractionImageCreateManyAttractionInputEnvelope
    connect?: Enumerable<AttractionImageWhereUniqueInput>
  }

  export type DestinationUpdateOneRequiredWithoutAttractionsNestedInput = {
    create?: XOR<DestinationCreateWithoutAttractionsInput, DestinationUncheckedCreateWithoutAttractionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutAttractionsInput
    upsert?: DestinationUpsertWithoutAttractionsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<DestinationUpdateWithoutAttractionsInput, DestinationUncheckedUpdateWithoutAttractionsInput>
  }

  export type AttractionImageUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<Enumerable<AttractionImageCreateWithoutAttractionInput>, Enumerable<AttractionImageUncheckedCreateWithoutAttractionInput>>
    connectOrCreate?: Enumerable<AttractionImageCreateOrConnectWithoutAttractionInput>
    upsert?: Enumerable<AttractionImageUpsertWithWhereUniqueWithoutAttractionInput>
    createMany?: AttractionImageCreateManyAttractionInputEnvelope
    set?: Enumerable<AttractionImageWhereUniqueInput>
    disconnect?: Enumerable<AttractionImageWhereUniqueInput>
    delete?: Enumerable<AttractionImageWhereUniqueInput>
    connect?: Enumerable<AttractionImageWhereUniqueInput>
    update?: Enumerable<AttractionImageUpdateWithWhereUniqueWithoutAttractionInput>
    updateMany?: Enumerable<AttractionImageUpdateManyWithWhereWithoutAttractionInput>
    deleteMany?: Enumerable<AttractionImageScalarWhereInput>
  }

  export type AttractionImageUncheckedUpdateManyWithoutAttractionNestedInput = {
    create?: XOR<Enumerable<AttractionImageCreateWithoutAttractionInput>, Enumerable<AttractionImageUncheckedCreateWithoutAttractionInput>>
    connectOrCreate?: Enumerable<AttractionImageCreateOrConnectWithoutAttractionInput>
    upsert?: Enumerable<AttractionImageUpsertWithWhereUniqueWithoutAttractionInput>
    createMany?: AttractionImageCreateManyAttractionInputEnvelope
    set?: Enumerable<AttractionImageWhereUniqueInput>
    disconnect?: Enumerable<AttractionImageWhereUniqueInput>
    delete?: Enumerable<AttractionImageWhereUniqueInput>
    connect?: Enumerable<AttractionImageWhereUniqueInput>
    update?: Enumerable<AttractionImageUpdateWithWhereUniqueWithoutAttractionInput>
    updateMany?: Enumerable<AttractionImageUpdateManyWithWhereWithoutAttractionInput>
    deleteMany?: Enumerable<AttractionImageScalarWhereInput>
  }

  export type DestinationCreateNestedOneWithoutImagesInput = {
    create?: XOR<DestinationCreateWithoutImagesInput, DestinationUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutImagesInput
    connect?: DestinationWhereUniqueInput
  }

  export type DestinationUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<DestinationCreateWithoutImagesInput, DestinationUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutImagesInput
    upsert?: DestinationUpsertWithoutImagesInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<DestinationUpdateWithoutImagesInput, DestinationUncheckedUpdateWithoutImagesInput>
  }

  export type AttractionCreateNestedOneWithoutImagesInput = {
    create?: XOR<AttractionCreateWithoutImagesInput, AttractionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutImagesInput
    connect?: AttractionWhereUniqueInput
  }

  export type AttractionUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<AttractionCreateWithoutImagesInput, AttractionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AttractionCreateOrConnectWithoutImagesInput
    upsert?: AttractionUpsertWithoutImagesInput
    connect?: AttractionWhereUniqueInput
    update?: XOR<AttractionUpdateWithoutImagesInput, AttractionUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DestinationCreateWithoutCountryInput = {
    name: string
    region: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionCreateNestedManyWithoutDestinationInput
    images?: DestinationImageCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutCountryInput = {
    id?: number
    name: string
    region: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutDestinationInput
    images?: DestinationImageUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutCountryInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutCountryInput, DestinationUncheckedCreateWithoutCountryInput>
  }

  export type DestinationCreateManyCountryInputEnvelope = {
    data: Enumerable<DestinationCreateManyCountryInput>
    skipDuplicates?: boolean
  }

  export type DestinationUpsertWithWhereUniqueWithoutCountryInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutCountryInput, DestinationUncheckedUpdateWithoutCountryInput>
    create: XOR<DestinationCreateWithoutCountryInput, DestinationUncheckedCreateWithoutCountryInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutCountryInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutCountryInput, DestinationUncheckedUpdateWithoutCountryInput>
  }

  export type DestinationUpdateManyWithWhereWithoutCountryInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutDestinationsInput>
  }

  export type DestinationScalarWhereInput = {
    AND?: Enumerable<DestinationScalarWhereInput>
    OR?: Enumerable<DestinationScalarWhereInput>
    NOT?: Enumerable<DestinationScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    region?: StringFilter | string
    countryId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AttractionCreateWithoutDestinationInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: AttractionImageCreateNestedManyWithoutAttractionInput
  }

  export type AttractionUncheckedCreateWithoutDestinationInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: AttractionImageUncheckedCreateNestedManyWithoutAttractionInput
  }

  export type AttractionCreateOrConnectWithoutDestinationInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutDestinationInput, AttractionUncheckedCreateWithoutDestinationInput>
  }

  export type AttractionCreateManyDestinationInputEnvelope = {
    data: Enumerable<AttractionCreateManyDestinationInput>
    skipDuplicates?: boolean
  }

  export type CountryCreateWithoutDestinationsInput = {
    code: string
    name: string
  }

  export type CountryUncheckedCreateWithoutDestinationsInput = {
    id?: number
    code: string
    name: string
  }

  export type CountryCreateOrConnectWithoutDestinationsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutDestinationsInput, CountryUncheckedCreateWithoutDestinationsInput>
  }

  export type DestinationImageCreateWithoutDestinationInput = {
    id?: string
    url: string
  }

  export type DestinationImageUncheckedCreateWithoutDestinationInput = {
    id?: string
    url: string
  }

  export type DestinationImageCreateOrConnectWithoutDestinationInput = {
    where: DestinationImageWhereUniqueInput
    create: XOR<DestinationImageCreateWithoutDestinationInput, DestinationImageUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationImageCreateManyDestinationInputEnvelope = {
    data: Enumerable<DestinationImageCreateManyDestinationInput>
    skipDuplicates?: boolean
  }

  export type AttractionUpsertWithWhereUniqueWithoutDestinationInput = {
    where: AttractionWhereUniqueInput
    update: XOR<AttractionUpdateWithoutDestinationInput, AttractionUncheckedUpdateWithoutDestinationInput>
    create: XOR<AttractionCreateWithoutDestinationInput, AttractionUncheckedCreateWithoutDestinationInput>
  }

  export type AttractionUpdateWithWhereUniqueWithoutDestinationInput = {
    where: AttractionWhereUniqueInput
    data: XOR<AttractionUpdateWithoutDestinationInput, AttractionUncheckedUpdateWithoutDestinationInput>
  }

  export type AttractionUpdateManyWithWhereWithoutDestinationInput = {
    where: AttractionScalarWhereInput
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyWithoutAttractionsInput>
  }

  export type AttractionScalarWhereInput = {
    AND?: Enumerable<AttractionScalarWhereInput>
    OR?: Enumerable<AttractionScalarWhereInput>
    NOT?: Enumerable<AttractionScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    destinationId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CountryUpsertWithoutDestinationsInput = {
    update: XOR<CountryUpdateWithoutDestinationsInput, CountryUncheckedUpdateWithoutDestinationsInput>
    create: XOR<CountryCreateWithoutDestinationsInput, CountryUncheckedCreateWithoutDestinationsInput>
  }

  export type CountryUpdateWithoutDestinationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationImageUpsertWithWhereUniqueWithoutDestinationInput = {
    where: DestinationImageWhereUniqueInput
    update: XOR<DestinationImageUpdateWithoutDestinationInput, DestinationImageUncheckedUpdateWithoutDestinationInput>
    create: XOR<DestinationImageCreateWithoutDestinationInput, DestinationImageUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationImageUpdateWithWhereUniqueWithoutDestinationInput = {
    where: DestinationImageWhereUniqueInput
    data: XOR<DestinationImageUpdateWithoutDestinationInput, DestinationImageUncheckedUpdateWithoutDestinationInput>
  }

  export type DestinationImageUpdateManyWithWhereWithoutDestinationInput = {
    where: DestinationImageScalarWhereInput
    data: XOR<DestinationImageUpdateManyMutationInput, DestinationImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type DestinationImageScalarWhereInput = {
    AND?: Enumerable<DestinationImageScalarWhereInput>
    OR?: Enumerable<DestinationImageScalarWhereInput>
    NOT?: Enumerable<DestinationImageScalarWhereInput>
    id?: StringFilter | string
    url?: StringFilter | string
    destinationId?: IntFilter | number
  }

  export type DestinationCreateWithoutAttractionsInput = {
    name: string
    region: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutDestinationsInput
    images?: DestinationImageCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutAttractionsInput = {
    id?: number
    name: string
    region: string
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: DestinationImageUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutAttractionsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutAttractionsInput, DestinationUncheckedCreateWithoutAttractionsInput>
  }

  export type AttractionImageCreateWithoutAttractionInput = {
    id?: string
    url: string
  }

  export type AttractionImageUncheckedCreateWithoutAttractionInput = {
    id?: string
    url: string
  }

  export type AttractionImageCreateOrConnectWithoutAttractionInput = {
    where: AttractionImageWhereUniqueInput
    create: XOR<AttractionImageCreateWithoutAttractionInput, AttractionImageUncheckedCreateWithoutAttractionInput>
  }

  export type AttractionImageCreateManyAttractionInputEnvelope = {
    data: Enumerable<AttractionImageCreateManyAttractionInput>
    skipDuplicates?: boolean
  }

  export type DestinationUpsertWithoutAttractionsInput = {
    update: XOR<DestinationUpdateWithoutAttractionsInput, DestinationUncheckedUpdateWithoutAttractionsInput>
    create: XOR<DestinationCreateWithoutAttractionsInput, DestinationUncheckedCreateWithoutAttractionsInput>
  }

  export type DestinationUpdateWithoutAttractionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutDestinationsNestedInput
    images?: DestinationImageUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutAttractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DestinationImageUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type AttractionImageUpsertWithWhereUniqueWithoutAttractionInput = {
    where: AttractionImageWhereUniqueInput
    update: XOR<AttractionImageUpdateWithoutAttractionInput, AttractionImageUncheckedUpdateWithoutAttractionInput>
    create: XOR<AttractionImageCreateWithoutAttractionInput, AttractionImageUncheckedCreateWithoutAttractionInput>
  }

  export type AttractionImageUpdateWithWhereUniqueWithoutAttractionInput = {
    where: AttractionImageWhereUniqueInput
    data: XOR<AttractionImageUpdateWithoutAttractionInput, AttractionImageUncheckedUpdateWithoutAttractionInput>
  }

  export type AttractionImageUpdateManyWithWhereWithoutAttractionInput = {
    where: AttractionImageScalarWhereInput
    data: XOR<AttractionImageUpdateManyMutationInput, AttractionImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type AttractionImageScalarWhereInput = {
    AND?: Enumerable<AttractionImageScalarWhereInput>
    OR?: Enumerable<AttractionImageScalarWhereInput>
    NOT?: Enumerable<AttractionImageScalarWhereInput>
    id?: StringFilter | string
    url?: StringFilter | string
    attractionId?: IntFilter | number
  }

  export type DestinationCreateWithoutImagesInput = {
    name: string
    region: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionCreateNestedManyWithoutDestinationInput
    country: CountryCreateNestedOneWithoutDestinationsInput
  }

  export type DestinationUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    region: string
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attractions?: AttractionUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutImagesInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutImagesInput, DestinationUncheckedCreateWithoutImagesInput>
  }

  export type DestinationUpsertWithoutImagesInput = {
    update: XOR<DestinationUpdateWithoutImagesInput, DestinationUncheckedUpdateWithoutImagesInput>
    create: XOR<DestinationCreateWithoutImagesInput, DestinationUncheckedCreateWithoutImagesInput>
  }

  export type DestinationUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUpdateManyWithoutDestinationNestedInput
    country?: CountryUpdateOneRequiredWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type AttractionCreateWithoutImagesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    destination: DestinationCreateNestedOneWithoutAttractionsInput
  }

  export type AttractionUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    destinationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionCreateOrConnectWithoutImagesInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutImagesInput, AttractionUncheckedCreateWithoutImagesInput>
  }

  export type AttractionUpsertWithoutImagesInput = {
    update: XOR<AttractionUpdateWithoutImagesInput, AttractionUncheckedUpdateWithoutImagesInput>
    create: XOR<AttractionCreateWithoutImagesInput, AttractionUncheckedCreateWithoutImagesInput>
  }

  export type AttractionUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutAttractionsNestedInput
  }

  export type AttractionUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    destinationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateManyCountryInput = {
    id?: number
    name: string
    region: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUpdateManyWithoutDestinationNestedInput
    images?: DestinationImageUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractions?: AttractionUncheckedUpdateManyWithoutDestinationNestedInput
    images?: DestinationImageUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionCreateManyDestinationInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationImageCreateManyDestinationInput = {
    id?: string
    url: string
  }

  export type AttractionUpdateWithoutDestinationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: AttractionImageUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: AttractionImageUncheckedUpdateManyWithoutAttractionNestedInput
  }

  export type AttractionUncheckedUpdateManyWithoutAttractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationImageUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationImageUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationImageUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AttractionImageCreateManyAttractionInput = {
    id?: string
    url: string
  }

  export type AttractionImageUpdateWithoutAttractionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AttractionImageUncheckedUpdateWithoutAttractionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AttractionImageUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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