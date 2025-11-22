
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
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Cuenca
 * 
 */
export type Cuenca = $Result.DefaultSelection<Prisma.$CuencaPayload>
/**
 * Model PozoRecurso
 * 
 */
export type PozoRecurso = $Result.DefaultSelection<Prisma.$PozoRecursoPayload>
/**
 * Model Sistema
 * 
 */
export type Sistema = $Result.DefaultSelection<Prisma.$SistemaPayload>
/**
 * Model PozoSistema
 * 
 */
export type PozoSistema = $Result.DefaultSelection<Prisma.$PozoSistemaPayload>
/**
 * Model ProduccionEmpresa
 * 
 */
export type ProduccionEmpresa = $Result.DefaultSelection<Prisma.$ProduccionEmpresaPayload>
/**
 * Model ProduccionRecurso
 * 
 */
export type ProduccionRecurso = $Result.DefaultSelection<Prisma.$ProduccionRecursoPayload>
/**
 * Model ProduccionArea
 * 
 */
export type ProduccionArea = $Result.DefaultSelection<Prisma.$ProduccionAreaPayload>
/**
 * Model TipoRecurso
 * 
 */
export type TipoRecurso = $Result.DefaultSelection<Prisma.$TipoRecursoPayload>
/**
 * Model Fluido
 * 
 */
export type Fluido = $Result.DefaultSelection<Prisma.$FluidoPayload>
/**
 * Model Noticias
 * 
 */
export type Noticias = $Result.DefaultSelection<Prisma.$NoticiasPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
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
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs>;

  /**
   * `prisma.cuenca`: Exposes CRUD operations for the **Cuenca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuencas
    * const cuencas = await prisma.cuenca.findMany()
    * ```
    */
  get cuenca(): Prisma.CuencaDelegate<ExtArgs>;

  /**
   * `prisma.pozoRecurso`: Exposes CRUD operations for the **PozoRecurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PozoRecursos
    * const pozoRecursos = await prisma.pozoRecurso.findMany()
    * ```
    */
  get pozoRecurso(): Prisma.PozoRecursoDelegate<ExtArgs>;

  /**
   * `prisma.sistema`: Exposes CRUD operations for the **Sistema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sistemas
    * const sistemas = await prisma.sistema.findMany()
    * ```
    */
  get sistema(): Prisma.SistemaDelegate<ExtArgs>;

  /**
   * `prisma.pozoSistema`: Exposes CRUD operations for the **PozoSistema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PozoSistemas
    * const pozoSistemas = await prisma.pozoSistema.findMany()
    * ```
    */
  get pozoSistema(): Prisma.PozoSistemaDelegate<ExtArgs>;

  /**
   * `prisma.produccionEmpresa`: Exposes CRUD operations for the **ProduccionEmpresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProduccionEmpresas
    * const produccionEmpresas = await prisma.produccionEmpresa.findMany()
    * ```
    */
  get produccionEmpresa(): Prisma.ProduccionEmpresaDelegate<ExtArgs>;

  /**
   * `prisma.produccionRecurso`: Exposes CRUD operations for the **ProduccionRecurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProduccionRecursos
    * const produccionRecursos = await prisma.produccionRecurso.findMany()
    * ```
    */
  get produccionRecurso(): Prisma.ProduccionRecursoDelegate<ExtArgs>;

  /**
   * `prisma.produccionArea`: Exposes CRUD operations for the **ProduccionArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProduccionAreas
    * const produccionAreas = await prisma.produccionArea.findMany()
    * ```
    */
  get produccionArea(): Prisma.ProduccionAreaDelegate<ExtArgs>;

  /**
   * `prisma.tipoRecurso`: Exposes CRUD operations for the **TipoRecurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoRecursos
    * const tipoRecursos = await prisma.tipoRecurso.findMany()
    * ```
    */
  get tipoRecurso(): Prisma.TipoRecursoDelegate<ExtArgs>;

  /**
   * `prisma.fluido`: Exposes CRUD operations for the **Fluido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fluidos
    * const fluidos = await prisma.fluido.findMany()
    * ```
    */
  get fluido(): Prisma.FluidoDelegate<ExtArgs>;

  /**
   * `prisma.noticias`: Exposes CRUD operations for the **Noticias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noticias
    * const noticias = await prisma.noticias.findMany()
    * ```
    */
  get noticias(): Prisma.NoticiasDelegate<ExtArgs>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Empresa: 'Empresa',
    Area: 'Area',
    Cuenca: 'Cuenca',
    PozoRecurso: 'PozoRecurso',
    Sistema: 'Sistema',
    PozoSistema: 'PozoSistema',
    ProduccionEmpresa: 'ProduccionEmpresa',
    ProduccionRecurso: 'ProduccionRecurso',
    ProduccionArea: 'ProduccionArea',
    TipoRecurso: 'TipoRecurso',
    Fluido: 'Fluido',
    Noticias: 'Noticias'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "empresa" | "area" | "cuenca" | "pozoRecurso" | "sistema" | "pozoSistema" | "produccionEmpresa" | "produccionRecurso" | "produccionArea" | "tipoRecurso" | "fluido" | "noticias"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Cuenca: {
        payload: Prisma.$CuencaPayload<ExtArgs>
        fields: Prisma.CuencaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuencaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuencaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload>
          }
          findFirst: {
            args: Prisma.CuencaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuencaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload>
          }
          findMany: {
            args: Prisma.CuencaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload>[]
          }
          create: {
            args: Prisma.CuencaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload>
          }
          createMany: {
            args: Prisma.CuencaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CuencaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload>[]
          }
          delete: {
            args: Prisma.CuencaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload>
          }
          update: {
            args: Prisma.CuencaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload>
          }
          deleteMany: {
            args: Prisma.CuencaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuencaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CuencaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuencaPayload>
          }
          aggregate: {
            args: Prisma.CuencaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuenca>
          }
          groupBy: {
            args: Prisma.CuencaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuencaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuencaCountArgs<ExtArgs>
            result: $Utils.Optional<CuencaCountAggregateOutputType> | number
          }
        }
      }
      PozoRecurso: {
        payload: Prisma.$PozoRecursoPayload<ExtArgs>
        fields: Prisma.PozoRecursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PozoRecursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PozoRecursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload>
          }
          findFirst: {
            args: Prisma.PozoRecursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PozoRecursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload>
          }
          findMany: {
            args: Prisma.PozoRecursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload>[]
          }
          create: {
            args: Prisma.PozoRecursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload>
          }
          createMany: {
            args: Prisma.PozoRecursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PozoRecursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload>[]
          }
          delete: {
            args: Prisma.PozoRecursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload>
          }
          update: {
            args: Prisma.PozoRecursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload>
          }
          deleteMany: {
            args: Prisma.PozoRecursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PozoRecursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PozoRecursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoRecursoPayload>
          }
          aggregate: {
            args: Prisma.PozoRecursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePozoRecurso>
          }
          groupBy: {
            args: Prisma.PozoRecursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PozoRecursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PozoRecursoCountArgs<ExtArgs>
            result: $Utils.Optional<PozoRecursoCountAggregateOutputType> | number
          }
        }
      }
      Sistema: {
        payload: Prisma.$SistemaPayload<ExtArgs>
        fields: Prisma.SistemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SistemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SistemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          findFirst: {
            args: Prisma.SistemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SistemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          findMany: {
            args: Prisma.SistemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>[]
          }
          create: {
            args: Prisma.SistemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          createMany: {
            args: Prisma.SistemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SistemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>[]
          }
          delete: {
            args: Prisma.SistemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          update: {
            args: Prisma.SistemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          deleteMany: {
            args: Prisma.SistemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SistemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SistemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SistemaPayload>
          }
          aggregate: {
            args: Prisma.SistemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSistema>
          }
          groupBy: {
            args: Prisma.SistemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SistemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SistemaCountArgs<ExtArgs>
            result: $Utils.Optional<SistemaCountAggregateOutputType> | number
          }
        }
      }
      PozoSistema: {
        payload: Prisma.$PozoSistemaPayload<ExtArgs>
        fields: Prisma.PozoSistemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PozoSistemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PozoSistemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload>
          }
          findFirst: {
            args: Prisma.PozoSistemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PozoSistemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload>
          }
          findMany: {
            args: Prisma.PozoSistemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload>[]
          }
          create: {
            args: Prisma.PozoSistemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload>
          }
          createMany: {
            args: Prisma.PozoSistemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PozoSistemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload>[]
          }
          delete: {
            args: Prisma.PozoSistemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload>
          }
          update: {
            args: Prisma.PozoSistemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload>
          }
          deleteMany: {
            args: Prisma.PozoSistemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PozoSistemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PozoSistemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PozoSistemaPayload>
          }
          aggregate: {
            args: Prisma.PozoSistemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePozoSistema>
          }
          groupBy: {
            args: Prisma.PozoSistemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PozoSistemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PozoSistemaCountArgs<ExtArgs>
            result: $Utils.Optional<PozoSistemaCountAggregateOutputType> | number
          }
        }
      }
      ProduccionEmpresa: {
        payload: Prisma.$ProduccionEmpresaPayload<ExtArgs>
        fields: Prisma.ProduccionEmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduccionEmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduccionEmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload>
          }
          findFirst: {
            args: Prisma.ProduccionEmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduccionEmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload>
          }
          findMany: {
            args: Prisma.ProduccionEmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload>[]
          }
          create: {
            args: Prisma.ProduccionEmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload>
          }
          createMany: {
            args: Prisma.ProduccionEmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduccionEmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload>[]
          }
          delete: {
            args: Prisma.ProduccionEmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload>
          }
          update: {
            args: Prisma.ProduccionEmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload>
          }
          deleteMany: {
            args: Prisma.ProduccionEmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduccionEmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProduccionEmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionEmpresaPayload>
          }
          aggregate: {
            args: Prisma.ProduccionEmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduccionEmpresa>
          }
          groupBy: {
            args: Prisma.ProduccionEmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduccionEmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduccionEmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<ProduccionEmpresaCountAggregateOutputType> | number
          }
        }
      }
      ProduccionRecurso: {
        payload: Prisma.$ProduccionRecursoPayload<ExtArgs>
        fields: Prisma.ProduccionRecursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduccionRecursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduccionRecursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload>
          }
          findFirst: {
            args: Prisma.ProduccionRecursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduccionRecursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload>
          }
          findMany: {
            args: Prisma.ProduccionRecursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload>[]
          }
          create: {
            args: Prisma.ProduccionRecursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload>
          }
          createMany: {
            args: Prisma.ProduccionRecursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduccionRecursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload>[]
          }
          delete: {
            args: Prisma.ProduccionRecursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload>
          }
          update: {
            args: Prisma.ProduccionRecursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload>
          }
          deleteMany: {
            args: Prisma.ProduccionRecursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduccionRecursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProduccionRecursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionRecursoPayload>
          }
          aggregate: {
            args: Prisma.ProduccionRecursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduccionRecurso>
          }
          groupBy: {
            args: Prisma.ProduccionRecursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduccionRecursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduccionRecursoCountArgs<ExtArgs>
            result: $Utils.Optional<ProduccionRecursoCountAggregateOutputType> | number
          }
        }
      }
      ProduccionArea: {
        payload: Prisma.$ProduccionAreaPayload<ExtArgs>
        fields: Prisma.ProduccionAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduccionAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduccionAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload>
          }
          findFirst: {
            args: Prisma.ProduccionAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduccionAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload>
          }
          findMany: {
            args: Prisma.ProduccionAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload>[]
          }
          create: {
            args: Prisma.ProduccionAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload>
          }
          createMany: {
            args: Prisma.ProduccionAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduccionAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload>[]
          }
          delete: {
            args: Prisma.ProduccionAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload>
          }
          update: {
            args: Prisma.ProduccionAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload>
          }
          deleteMany: {
            args: Prisma.ProduccionAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduccionAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProduccionAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduccionAreaPayload>
          }
          aggregate: {
            args: Prisma.ProduccionAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduccionArea>
          }
          groupBy: {
            args: Prisma.ProduccionAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduccionAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduccionAreaCountArgs<ExtArgs>
            result: $Utils.Optional<ProduccionAreaCountAggregateOutputType> | number
          }
        }
      }
      TipoRecurso: {
        payload: Prisma.$TipoRecursoPayload<ExtArgs>
        fields: Prisma.TipoRecursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoRecursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoRecursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload>
          }
          findFirst: {
            args: Prisma.TipoRecursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoRecursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload>
          }
          findMany: {
            args: Prisma.TipoRecursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload>[]
          }
          create: {
            args: Prisma.TipoRecursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload>
          }
          createMany: {
            args: Prisma.TipoRecursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoRecursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload>[]
          }
          delete: {
            args: Prisma.TipoRecursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload>
          }
          update: {
            args: Prisma.TipoRecursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload>
          }
          deleteMany: {
            args: Prisma.TipoRecursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoRecursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoRecursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRecursoPayload>
          }
          aggregate: {
            args: Prisma.TipoRecursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoRecurso>
          }
          groupBy: {
            args: Prisma.TipoRecursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoRecursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoRecursoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoRecursoCountAggregateOutputType> | number
          }
        }
      }
      Fluido: {
        payload: Prisma.$FluidoPayload<ExtArgs>
        fields: Prisma.FluidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FluidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FluidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          findFirst: {
            args: Prisma.FluidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FluidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          findMany: {
            args: Prisma.FluidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>[]
          }
          create: {
            args: Prisma.FluidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          createMany: {
            args: Prisma.FluidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FluidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>[]
          }
          delete: {
            args: Prisma.FluidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          update: {
            args: Prisma.FluidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          deleteMany: {
            args: Prisma.FluidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FluidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FluidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          aggregate: {
            args: Prisma.FluidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFluido>
          }
          groupBy: {
            args: Prisma.FluidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FluidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FluidoCountArgs<ExtArgs>
            result: $Utils.Optional<FluidoCountAggregateOutputType> | number
          }
        }
      }
      Noticias: {
        payload: Prisma.$NoticiasPayload<ExtArgs>
        fields: Prisma.NoticiasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticiasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticiasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          findFirst: {
            args: Prisma.NoticiasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticiasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          findMany: {
            args: Prisma.NoticiasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>[]
          }
          create: {
            args: Prisma.NoticiasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          createMany: {
            args: Prisma.NoticiasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticiasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>[]
          }
          delete: {
            args: Prisma.NoticiasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          update: {
            args: Prisma.NoticiasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          deleteMany: {
            args: Prisma.NoticiasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticiasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoticiasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          aggregate: {
            args: Prisma.NoticiasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticias>
          }
          groupBy: {
            args: Prisma.NoticiasGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticiasGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticiasCountArgs<ExtArgs>
            result: $Utils.Optional<NoticiasCountAggregateOutputType> | number
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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    areas: number
    producciones: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | EmpresaCountOutputTypeCountAreasArgs
    producciones?: boolean | EmpresaCountOutputTypeCountProduccionesArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountProduccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionEmpresaWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    producciones: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producciones?: boolean | AreaCountOutputTypeCountProduccionesArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountProduccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionAreaWhereInput
  }


  /**
   * Count Type CuencaCountOutputType
   */

  export type CuencaCountOutputType = {
    areas: number
  }

  export type CuencaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | CuencaCountOutputTypeCountAreasArgs
  }

  // Custom InputTypes
  /**
   * CuencaCountOutputType without action
   */
  export type CuencaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuencaCountOutputType
     */
    select?: CuencaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuencaCountOutputType without action
   */
  export type CuencaCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }


  /**
   * Count Type SistemaCountOutputType
   */

  export type SistemaCountOutputType = {
    pozos: number
  }

  export type SistemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pozos?: boolean | SistemaCountOutputTypeCountPozosArgs
  }

  // Custom InputTypes
  /**
   * SistemaCountOutputType without action
   */
  export type SistemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SistemaCountOutputType
     */
    select?: SistemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SistemaCountOutputType without action
   */
  export type SistemaCountOutputTypeCountPozosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PozoSistemaWhereInput
  }


  /**
   * Count Type TipoRecursoCountOutputType
   */

  export type TipoRecursoCountOutputType = {
    produccion: number
    pozos: number
  }

  export type TipoRecursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produccion?: boolean | TipoRecursoCountOutputTypeCountProduccionArgs
    pozos?: boolean | TipoRecursoCountOutputTypeCountPozosArgs
  }

  // Custom InputTypes
  /**
   * TipoRecursoCountOutputType without action
   */
  export type TipoRecursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecursoCountOutputType
     */
    select?: TipoRecursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoRecursoCountOutputType without action
   */
  export type TipoRecursoCountOutputTypeCountProduccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionRecursoWhereInput
  }

  /**
   * TipoRecursoCountOutputType without action
   */
  export type TipoRecursoCountOutputTypeCountPozosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PozoRecursoWhereInput
  }


  /**
   * Count Type FluidoCountOutputType
   */

  export type FluidoCountOutputType = {
    produccionRecurso: number
    produccionArea: number
    produccionEmpresa: number
    pozos: number
  }

  export type FluidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produccionRecurso?: boolean | FluidoCountOutputTypeCountProduccionRecursoArgs
    produccionArea?: boolean | FluidoCountOutputTypeCountProduccionAreaArgs
    produccionEmpresa?: boolean | FluidoCountOutputTypeCountProduccionEmpresaArgs
    pozos?: boolean | FluidoCountOutputTypeCountPozosArgs
  }

  // Custom InputTypes
  /**
   * FluidoCountOutputType without action
   */
  export type FluidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluidoCountOutputType
     */
    select?: FluidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FluidoCountOutputType without action
   */
  export type FluidoCountOutputTypeCountProduccionRecursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionRecursoWhereInput
  }

  /**
   * FluidoCountOutputType without action
   */
  export type FluidoCountOutputTypeCountProduccionAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionAreaWhereInput
  }

  /**
   * FluidoCountOutputType without action
   */
  export type FluidoCountOutputTypeCountProduccionEmpresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionEmpresaWhereInput
  }

  /**
   * FluidoCountOutputType without action
   */
  export type FluidoCountOutputTypeCountPozosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PozoRecursoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpresaSumAggregateOutputType = {
    id: number | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: number | null
    nombreEmpresa: string | null
    comentario: string | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: number | null
    nombreEmpresa: string | null
    comentario: string | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nombreEmpresa: number
    comentario: number
    _all: number
  }


  export type EmpresaAvgAggregateInputType = {
    id?: true
  }

  export type EmpresaSumAggregateInputType = {
    id?: true
  }

  export type EmpresaMinAggregateInputType = {
    id?: true
    nombreEmpresa?: true
    comentario?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nombreEmpresa?: true
    comentario?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nombreEmpresa?: true
    comentario?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _avg?: EmpresaAvgAggregateInputType
    _sum?: EmpresaSumAggregateInputType
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: number
    nombreEmpresa: string
    comentario: string | null
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreEmpresa?: boolean
    comentario?: boolean
    areas?: boolean | Empresa$areasArgs<ExtArgs>
    producciones?: boolean | Empresa$produccionesArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreEmpresa?: boolean
    comentario?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    nombreEmpresa?: boolean
    comentario?: boolean
  }

  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | Empresa$areasArgs<ExtArgs>
    producciones?: boolean | Empresa$produccionesArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      areas: Prisma.$AreaPayload<ExtArgs>[]
      producciones: Prisma.$ProduccionEmpresaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombreEmpresa: string
      comentario: string | null
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areas<T extends Empresa$areasArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany"> | Null>
    producciones<T extends Empresa$produccionesArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$produccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Empresa model
   */ 
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'Int'>
    readonly nombreEmpresa: FieldRef<"Empresa", 'String'>
    readonly comentario: FieldRef<"Empresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
  }

  /**
   * Empresa.areas
   */
  export type Empresa$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Empresa.producciones
   */
  export type Empresa$produccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    where?: ProduccionEmpresaWhereInput
    orderBy?: ProduccionEmpresaOrderByWithRelationInput | ProduccionEmpresaOrderByWithRelationInput[]
    cursor?: ProduccionEmpresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduccionEmpresaScalarFieldEnum | ProduccionEmpresaScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
    cuencaId: number | null
    empresaId: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
    cuencaId: number | null
    empresaId: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
    nombreArea: string | null
    cuencaId: number | null
    empresaId: number | null
    comentario: string | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
    nombreArea: string | null
    cuencaId: number | null
    empresaId: number | null
    comentario: string | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    nombreArea: number
    cuencaId: number
    empresaId: number
    comentario: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
    cuencaId?: true
    empresaId?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
    cuencaId?: true
    empresaId?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    nombreArea?: true
    cuencaId?: true
    empresaId?: true
    comentario?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    nombreArea?: true
    cuencaId?: true
    empresaId?: true
    comentario?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    nombreArea?: true
    cuencaId?: true
    empresaId?: true
    comentario?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    nombreArea: string
    cuencaId: number
    empresaId: number
    comentario: string | null
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreArea?: boolean
    cuencaId?: boolean
    empresaId?: boolean
    comentario?: boolean
    cuenca?: boolean | CuencaDefaultArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    producciones?: boolean | Area$produccionesArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreArea?: boolean
    cuencaId?: boolean
    empresaId?: boolean
    comentario?: boolean
    cuenca?: boolean | CuencaDefaultArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    nombreArea?: boolean
    cuencaId?: boolean
    empresaId?: boolean
    comentario?: boolean
  }

  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenca?: boolean | CuencaDefaultArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    producciones?: boolean | Area$produccionesArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenca?: boolean | CuencaDefaultArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      cuenca: Prisma.$CuencaPayload<ExtArgs>
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      producciones: Prisma.$ProduccionAreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombreArea: string
      cuencaId: number
      empresaId: number
      comentario: string | null
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
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
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuenca<T extends CuencaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuencaDefaultArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    producciones<T extends Area$produccionesArgs<ExtArgs> = {}>(args?: Subset<T, Area$produccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Area model
   */ 
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'Int'>
    readonly nombreArea: FieldRef<"Area", 'String'>
    readonly cuencaId: FieldRef<"Area", 'Int'>
    readonly empresaId: FieldRef<"Area", 'Int'>
    readonly comentario: FieldRef<"Area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
  }

  /**
   * Area.producciones
   */
  export type Area$produccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    where?: ProduccionAreaWhereInput
    orderBy?: ProduccionAreaOrderByWithRelationInput | ProduccionAreaOrderByWithRelationInput[]
    cursor?: ProduccionAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduccionAreaScalarFieldEnum | ProduccionAreaScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Cuenca
   */

  export type AggregateCuenca = {
    _count: CuencaCountAggregateOutputType | null
    _avg: CuencaAvgAggregateOutputType | null
    _sum: CuencaSumAggregateOutputType | null
    _min: CuencaMinAggregateOutputType | null
    _max: CuencaMaxAggregateOutputType | null
  }

  export type CuencaAvgAggregateOutputType = {
    id: number | null
  }

  export type CuencaSumAggregateOutputType = {
    id: number | null
  }

  export type CuencaMinAggregateOutputType = {
    id: number | null
    nombreCuenca: string | null
    comentario: string | null
  }

  export type CuencaMaxAggregateOutputType = {
    id: number | null
    nombreCuenca: string | null
    comentario: string | null
  }

  export type CuencaCountAggregateOutputType = {
    id: number
    nombreCuenca: number
    comentario: number
    _all: number
  }


  export type CuencaAvgAggregateInputType = {
    id?: true
  }

  export type CuencaSumAggregateInputType = {
    id?: true
  }

  export type CuencaMinAggregateInputType = {
    id?: true
    nombreCuenca?: true
    comentario?: true
  }

  export type CuencaMaxAggregateInputType = {
    id?: true
    nombreCuenca?: true
    comentario?: true
  }

  export type CuencaCountAggregateInputType = {
    id?: true
    nombreCuenca?: true
    comentario?: true
    _all?: true
  }

  export type CuencaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuenca to aggregate.
     */
    where?: CuencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuencas to fetch.
     */
    orderBy?: CuencaOrderByWithRelationInput | CuencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuencas
    **/
    _count?: true | CuencaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuencaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuencaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuencaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuencaMaxAggregateInputType
  }

  export type GetCuencaAggregateType<T extends CuencaAggregateArgs> = {
        [P in keyof T & keyof AggregateCuenca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuenca[P]>
      : GetScalarType<T[P], AggregateCuenca[P]>
  }




  export type CuencaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuencaWhereInput
    orderBy?: CuencaOrderByWithAggregationInput | CuencaOrderByWithAggregationInput[]
    by: CuencaScalarFieldEnum[] | CuencaScalarFieldEnum
    having?: CuencaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuencaCountAggregateInputType | true
    _avg?: CuencaAvgAggregateInputType
    _sum?: CuencaSumAggregateInputType
    _min?: CuencaMinAggregateInputType
    _max?: CuencaMaxAggregateInputType
  }

  export type CuencaGroupByOutputType = {
    id: number
    nombreCuenca: string
    comentario: string | null
    _count: CuencaCountAggregateOutputType | null
    _avg: CuencaAvgAggregateOutputType | null
    _sum: CuencaSumAggregateOutputType | null
    _min: CuencaMinAggregateOutputType | null
    _max: CuencaMaxAggregateOutputType | null
  }

  type GetCuencaGroupByPayload<T extends CuencaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuencaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuencaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuencaGroupByOutputType[P]>
            : GetScalarType<T[P], CuencaGroupByOutputType[P]>
        }
      >
    >


  export type CuencaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreCuenca?: boolean
    comentario?: boolean
    areas?: boolean | Cuenca$areasArgs<ExtArgs>
    _count?: boolean | CuencaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuenca"]>

  export type CuencaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreCuenca?: boolean
    comentario?: boolean
  }, ExtArgs["result"]["cuenca"]>

  export type CuencaSelectScalar = {
    id?: boolean
    nombreCuenca?: boolean
    comentario?: boolean
  }

  export type CuencaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | Cuenca$areasArgs<ExtArgs>
    _count?: boolean | CuencaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CuencaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CuencaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cuenca"
    objects: {
      areas: Prisma.$AreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombreCuenca: string
      comentario: string | null
    }, ExtArgs["result"]["cuenca"]>
    composites: {}
  }

  type CuencaGetPayload<S extends boolean | null | undefined | CuencaDefaultArgs> = $Result.GetResult<Prisma.$CuencaPayload, S>

  type CuencaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CuencaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CuencaCountAggregateInputType | true
    }

  export interface CuencaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cuenca'], meta: { name: 'Cuenca' } }
    /**
     * Find zero or one Cuenca that matches the filter.
     * @param {CuencaFindUniqueArgs} args - Arguments to find a Cuenca
     * @example
     * // Get one Cuenca
     * const cuenca = await prisma.cuenca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuencaFindUniqueArgs>(args: SelectSubset<T, CuencaFindUniqueArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cuenca that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CuencaFindUniqueOrThrowArgs} args - Arguments to find a Cuenca
     * @example
     * // Get one Cuenca
     * const cuenca = await prisma.cuenca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuencaFindUniqueOrThrowArgs>(args: SelectSubset<T, CuencaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cuenca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuencaFindFirstArgs} args - Arguments to find a Cuenca
     * @example
     * // Get one Cuenca
     * const cuenca = await prisma.cuenca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuencaFindFirstArgs>(args?: SelectSubset<T, CuencaFindFirstArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cuenca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuencaFindFirstOrThrowArgs} args - Arguments to find a Cuenca
     * @example
     * // Get one Cuenca
     * const cuenca = await prisma.cuenca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuencaFindFirstOrThrowArgs>(args?: SelectSubset<T, CuencaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cuencas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuencaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuencas
     * const cuencas = await prisma.cuenca.findMany()
     * 
     * // Get first 10 Cuencas
     * const cuencas = await prisma.cuenca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuencaWithIdOnly = await prisma.cuenca.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CuencaFindManyArgs>(args?: SelectSubset<T, CuencaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cuenca.
     * @param {CuencaCreateArgs} args - Arguments to create a Cuenca.
     * @example
     * // Create one Cuenca
     * const Cuenca = await prisma.cuenca.create({
     *   data: {
     *     // ... data to create a Cuenca
     *   }
     * })
     * 
     */
    create<T extends CuencaCreateArgs>(args: SelectSubset<T, CuencaCreateArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cuencas.
     * @param {CuencaCreateManyArgs} args - Arguments to create many Cuencas.
     * @example
     * // Create many Cuencas
     * const cuenca = await prisma.cuenca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuencaCreateManyArgs>(args?: SelectSubset<T, CuencaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cuencas and returns the data saved in the database.
     * @param {CuencaCreateManyAndReturnArgs} args - Arguments to create many Cuencas.
     * @example
     * // Create many Cuencas
     * const cuenca = await prisma.cuenca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cuencas and only return the `id`
     * const cuencaWithIdOnly = await prisma.cuenca.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CuencaCreateManyAndReturnArgs>(args?: SelectSubset<T, CuencaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cuenca.
     * @param {CuencaDeleteArgs} args - Arguments to delete one Cuenca.
     * @example
     * // Delete one Cuenca
     * const Cuenca = await prisma.cuenca.delete({
     *   where: {
     *     // ... filter to delete one Cuenca
     *   }
     * })
     * 
     */
    delete<T extends CuencaDeleteArgs>(args: SelectSubset<T, CuencaDeleteArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cuenca.
     * @param {CuencaUpdateArgs} args - Arguments to update one Cuenca.
     * @example
     * // Update one Cuenca
     * const cuenca = await prisma.cuenca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuencaUpdateArgs>(args: SelectSubset<T, CuencaUpdateArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cuencas.
     * @param {CuencaDeleteManyArgs} args - Arguments to filter Cuencas to delete.
     * @example
     * // Delete a few Cuencas
     * const { count } = await prisma.cuenca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuencaDeleteManyArgs>(args?: SelectSubset<T, CuencaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuencaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuencas
     * const cuenca = await prisma.cuenca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuencaUpdateManyArgs>(args: SelectSubset<T, CuencaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuenca.
     * @param {CuencaUpsertArgs} args - Arguments to update or create a Cuenca.
     * @example
     * // Update or create a Cuenca
     * const cuenca = await prisma.cuenca.upsert({
     *   create: {
     *     // ... data to create a Cuenca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuenca we want to update
     *   }
     * })
     */
    upsert<T extends CuencaUpsertArgs>(args: SelectSubset<T, CuencaUpsertArgs<ExtArgs>>): Prisma__CuencaClient<$Result.GetResult<Prisma.$CuencaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cuencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuencaCountArgs} args - Arguments to filter Cuencas to count.
     * @example
     * // Count the number of Cuencas
     * const count = await prisma.cuenca.count({
     *   where: {
     *     // ... the filter for the Cuencas we want to count
     *   }
     * })
    **/
    count<T extends CuencaCountArgs>(
      args?: Subset<T, CuencaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuencaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuencaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuencaAggregateArgs>(args: Subset<T, CuencaAggregateArgs>): Prisma.PrismaPromise<GetCuencaAggregateType<T>>

    /**
     * Group by Cuenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuencaGroupByArgs} args - Group by arguments.
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
      T extends CuencaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuencaGroupByArgs['orderBy'] }
        : { orderBy?: CuencaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CuencaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuencaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cuenca model
   */
  readonly fields: CuencaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuenca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuencaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areas<T extends Cuenca$areasArgs<ExtArgs> = {}>(args?: Subset<T, Cuenca$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cuenca model
   */ 
  interface CuencaFieldRefs {
    readonly id: FieldRef<"Cuenca", 'Int'>
    readonly nombreCuenca: FieldRef<"Cuenca", 'String'>
    readonly comentario: FieldRef<"Cuenca", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cuenca findUnique
   */
  export type CuencaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenca to fetch.
     */
    where: CuencaWhereUniqueInput
  }

  /**
   * Cuenca findUniqueOrThrow
   */
  export type CuencaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenca to fetch.
     */
    where: CuencaWhereUniqueInput
  }

  /**
   * Cuenca findFirst
   */
  export type CuencaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenca to fetch.
     */
    where?: CuencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuencas to fetch.
     */
    orderBy?: CuencaOrderByWithRelationInput | CuencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuencas.
     */
    cursor?: CuencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuencas.
     */
    distinct?: CuencaScalarFieldEnum | CuencaScalarFieldEnum[]
  }

  /**
   * Cuenca findFirstOrThrow
   */
  export type CuencaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenca to fetch.
     */
    where?: CuencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuencas to fetch.
     */
    orderBy?: CuencaOrderByWithRelationInput | CuencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuencas.
     */
    cursor?: CuencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuencas.
     */
    distinct?: CuencaScalarFieldEnum | CuencaScalarFieldEnum[]
  }

  /**
   * Cuenca findMany
   */
  export type CuencaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * Filter, which Cuencas to fetch.
     */
    where?: CuencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuencas to fetch.
     */
    orderBy?: CuencaOrderByWithRelationInput | CuencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuencas.
     */
    cursor?: CuencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuencas.
     */
    skip?: number
    distinct?: CuencaScalarFieldEnum | CuencaScalarFieldEnum[]
  }

  /**
   * Cuenca create
   */
  export type CuencaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cuenca.
     */
    data: XOR<CuencaCreateInput, CuencaUncheckedCreateInput>
  }

  /**
   * Cuenca createMany
   */
  export type CuencaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cuencas.
     */
    data: CuencaCreateManyInput | CuencaCreateManyInput[]
  }

  /**
   * Cuenca createManyAndReturn
   */
  export type CuencaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cuencas.
     */
    data: CuencaCreateManyInput | CuencaCreateManyInput[]
  }

  /**
   * Cuenca update
   */
  export type CuencaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cuenca.
     */
    data: XOR<CuencaUpdateInput, CuencaUncheckedUpdateInput>
    /**
     * Choose, which Cuenca to update.
     */
    where: CuencaWhereUniqueInput
  }

  /**
   * Cuenca updateMany
   */
  export type CuencaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cuencas.
     */
    data: XOR<CuencaUpdateManyMutationInput, CuencaUncheckedUpdateManyInput>
    /**
     * Filter which Cuencas to update
     */
    where?: CuencaWhereInput
  }

  /**
   * Cuenca upsert
   */
  export type CuencaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cuenca to update in case it exists.
     */
    where: CuencaWhereUniqueInput
    /**
     * In case the Cuenca found by the `where` argument doesn't exist, create a new Cuenca with this data.
     */
    create: XOR<CuencaCreateInput, CuencaUncheckedCreateInput>
    /**
     * In case the Cuenca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuencaUpdateInput, CuencaUncheckedUpdateInput>
  }

  /**
   * Cuenca delete
   */
  export type CuencaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
    /**
     * Filter which Cuenca to delete.
     */
    where: CuencaWhereUniqueInput
  }

  /**
   * Cuenca deleteMany
   */
  export type CuencaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuencas to delete
     */
    where?: CuencaWhereInput
  }

  /**
   * Cuenca.areas
   */
  export type Cuenca$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Cuenca without action
   */
  export type CuencaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenca
     */
    select?: CuencaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuencaInclude<ExtArgs> | null
  }


  /**
   * Model PozoRecurso
   */

  export type AggregatePozoRecurso = {
    _count: PozoRecursoCountAggregateOutputType | null
    _avg: PozoRecursoAvgAggregateOutputType | null
    _sum: PozoRecursoSumAggregateOutputType | null
    _min: PozoRecursoMinAggregateOutputType | null
    _max: PozoRecursoMaxAggregateOutputType | null
  }

  export type PozoRecursoAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    tipoRecursoId: number | null
    fluidoId: number | null
  }

  export type PozoRecursoSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    tipoRecursoId: number | null
    fluidoId: number | null
  }

  export type PozoRecursoMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    tipoRecursoId: number | null
    fluidoId: number | null
  }

  export type PozoRecursoMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    tipoRecursoId: number | null
    fluidoId: number | null
  }

  export type PozoRecursoCountAggregateOutputType = {
    id: number
    cantidad: number
    mes: number
    anio: number
    observaciones: number
    tipoRecursoId: number
    fluidoId: number
    _all: number
  }


  export type PozoRecursoAvgAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    tipoRecursoId?: true
    fluidoId?: true
  }

  export type PozoRecursoSumAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    tipoRecursoId?: true
    fluidoId?: true
  }

  export type PozoRecursoMinAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    tipoRecursoId?: true
    fluidoId?: true
  }

  export type PozoRecursoMaxAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    tipoRecursoId?: true
    fluidoId?: true
  }

  export type PozoRecursoCountAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    tipoRecursoId?: true
    fluidoId?: true
    _all?: true
  }

  export type PozoRecursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PozoRecurso to aggregate.
     */
    where?: PozoRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PozoRecursos to fetch.
     */
    orderBy?: PozoRecursoOrderByWithRelationInput | PozoRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PozoRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PozoRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PozoRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PozoRecursos
    **/
    _count?: true | PozoRecursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PozoRecursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PozoRecursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PozoRecursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PozoRecursoMaxAggregateInputType
  }

  export type GetPozoRecursoAggregateType<T extends PozoRecursoAggregateArgs> = {
        [P in keyof T & keyof AggregatePozoRecurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePozoRecurso[P]>
      : GetScalarType<T[P], AggregatePozoRecurso[P]>
  }




  export type PozoRecursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PozoRecursoWhereInput
    orderBy?: PozoRecursoOrderByWithAggregationInput | PozoRecursoOrderByWithAggregationInput[]
    by: PozoRecursoScalarFieldEnum[] | PozoRecursoScalarFieldEnum
    having?: PozoRecursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PozoRecursoCountAggregateInputType | true
    _avg?: PozoRecursoAvgAggregateInputType
    _sum?: PozoRecursoSumAggregateInputType
    _min?: PozoRecursoMinAggregateInputType
    _max?: PozoRecursoMaxAggregateInputType
  }

  export type PozoRecursoGroupByOutputType = {
    id: number
    cantidad: number
    mes: number | null
    anio: number
    observaciones: string | null
    tipoRecursoId: number
    fluidoId: number
    _count: PozoRecursoCountAggregateOutputType | null
    _avg: PozoRecursoAvgAggregateOutputType | null
    _sum: PozoRecursoSumAggregateOutputType | null
    _min: PozoRecursoMinAggregateOutputType | null
    _max: PozoRecursoMaxAggregateOutputType | null
  }

  type GetPozoRecursoGroupByPayload<T extends PozoRecursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PozoRecursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PozoRecursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PozoRecursoGroupByOutputType[P]>
            : GetScalarType<T[P], PozoRecursoGroupByOutputType[P]>
        }
      >
    >


  export type PozoRecursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    tipoRecursoId?: boolean
    fluidoId?: boolean
    tipoRecurso?: boolean | TipoRecursoDefaultArgs<ExtArgs>
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pozoRecurso"]>

  export type PozoRecursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    tipoRecursoId?: boolean
    fluidoId?: boolean
    tipoRecurso?: boolean | TipoRecursoDefaultArgs<ExtArgs>
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pozoRecurso"]>

  export type PozoRecursoSelectScalar = {
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    tipoRecursoId?: boolean
    fluidoId?: boolean
  }

  export type PozoRecursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRecurso?: boolean | TipoRecursoDefaultArgs<ExtArgs>
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
  }
  export type PozoRecursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRecurso?: boolean | TipoRecursoDefaultArgs<ExtArgs>
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
  }

  export type $PozoRecursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PozoRecurso"
    objects: {
      tipoRecurso: Prisma.$TipoRecursoPayload<ExtArgs>
      fluido: Prisma.$FluidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      mes: number | null
      anio: number
      observaciones: string | null
      tipoRecursoId: number
      fluidoId: number
    }, ExtArgs["result"]["pozoRecurso"]>
    composites: {}
  }

  type PozoRecursoGetPayload<S extends boolean | null | undefined | PozoRecursoDefaultArgs> = $Result.GetResult<Prisma.$PozoRecursoPayload, S>

  type PozoRecursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PozoRecursoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PozoRecursoCountAggregateInputType | true
    }

  export interface PozoRecursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PozoRecurso'], meta: { name: 'PozoRecurso' } }
    /**
     * Find zero or one PozoRecurso that matches the filter.
     * @param {PozoRecursoFindUniqueArgs} args - Arguments to find a PozoRecurso
     * @example
     * // Get one PozoRecurso
     * const pozoRecurso = await prisma.pozoRecurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PozoRecursoFindUniqueArgs>(args: SelectSubset<T, PozoRecursoFindUniqueArgs<ExtArgs>>): Prisma__PozoRecursoClient<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PozoRecurso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PozoRecursoFindUniqueOrThrowArgs} args - Arguments to find a PozoRecurso
     * @example
     * // Get one PozoRecurso
     * const pozoRecurso = await prisma.pozoRecurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PozoRecursoFindUniqueOrThrowArgs>(args: SelectSubset<T, PozoRecursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PozoRecursoClient<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PozoRecurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoRecursoFindFirstArgs} args - Arguments to find a PozoRecurso
     * @example
     * // Get one PozoRecurso
     * const pozoRecurso = await prisma.pozoRecurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PozoRecursoFindFirstArgs>(args?: SelectSubset<T, PozoRecursoFindFirstArgs<ExtArgs>>): Prisma__PozoRecursoClient<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PozoRecurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoRecursoFindFirstOrThrowArgs} args - Arguments to find a PozoRecurso
     * @example
     * // Get one PozoRecurso
     * const pozoRecurso = await prisma.pozoRecurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PozoRecursoFindFirstOrThrowArgs>(args?: SelectSubset<T, PozoRecursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PozoRecursoClient<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PozoRecursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoRecursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PozoRecursos
     * const pozoRecursos = await prisma.pozoRecurso.findMany()
     * 
     * // Get first 10 PozoRecursos
     * const pozoRecursos = await prisma.pozoRecurso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pozoRecursoWithIdOnly = await prisma.pozoRecurso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PozoRecursoFindManyArgs>(args?: SelectSubset<T, PozoRecursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PozoRecurso.
     * @param {PozoRecursoCreateArgs} args - Arguments to create a PozoRecurso.
     * @example
     * // Create one PozoRecurso
     * const PozoRecurso = await prisma.pozoRecurso.create({
     *   data: {
     *     // ... data to create a PozoRecurso
     *   }
     * })
     * 
     */
    create<T extends PozoRecursoCreateArgs>(args: SelectSubset<T, PozoRecursoCreateArgs<ExtArgs>>): Prisma__PozoRecursoClient<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PozoRecursos.
     * @param {PozoRecursoCreateManyArgs} args - Arguments to create many PozoRecursos.
     * @example
     * // Create many PozoRecursos
     * const pozoRecurso = await prisma.pozoRecurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PozoRecursoCreateManyArgs>(args?: SelectSubset<T, PozoRecursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PozoRecursos and returns the data saved in the database.
     * @param {PozoRecursoCreateManyAndReturnArgs} args - Arguments to create many PozoRecursos.
     * @example
     * // Create many PozoRecursos
     * const pozoRecurso = await prisma.pozoRecurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PozoRecursos and only return the `id`
     * const pozoRecursoWithIdOnly = await prisma.pozoRecurso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PozoRecursoCreateManyAndReturnArgs>(args?: SelectSubset<T, PozoRecursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PozoRecurso.
     * @param {PozoRecursoDeleteArgs} args - Arguments to delete one PozoRecurso.
     * @example
     * // Delete one PozoRecurso
     * const PozoRecurso = await prisma.pozoRecurso.delete({
     *   where: {
     *     // ... filter to delete one PozoRecurso
     *   }
     * })
     * 
     */
    delete<T extends PozoRecursoDeleteArgs>(args: SelectSubset<T, PozoRecursoDeleteArgs<ExtArgs>>): Prisma__PozoRecursoClient<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PozoRecurso.
     * @param {PozoRecursoUpdateArgs} args - Arguments to update one PozoRecurso.
     * @example
     * // Update one PozoRecurso
     * const pozoRecurso = await prisma.pozoRecurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PozoRecursoUpdateArgs>(args: SelectSubset<T, PozoRecursoUpdateArgs<ExtArgs>>): Prisma__PozoRecursoClient<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PozoRecursos.
     * @param {PozoRecursoDeleteManyArgs} args - Arguments to filter PozoRecursos to delete.
     * @example
     * // Delete a few PozoRecursos
     * const { count } = await prisma.pozoRecurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PozoRecursoDeleteManyArgs>(args?: SelectSubset<T, PozoRecursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PozoRecursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoRecursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PozoRecursos
     * const pozoRecurso = await prisma.pozoRecurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PozoRecursoUpdateManyArgs>(args: SelectSubset<T, PozoRecursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PozoRecurso.
     * @param {PozoRecursoUpsertArgs} args - Arguments to update or create a PozoRecurso.
     * @example
     * // Update or create a PozoRecurso
     * const pozoRecurso = await prisma.pozoRecurso.upsert({
     *   create: {
     *     // ... data to create a PozoRecurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PozoRecurso we want to update
     *   }
     * })
     */
    upsert<T extends PozoRecursoUpsertArgs>(args: SelectSubset<T, PozoRecursoUpsertArgs<ExtArgs>>): Prisma__PozoRecursoClient<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PozoRecursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoRecursoCountArgs} args - Arguments to filter PozoRecursos to count.
     * @example
     * // Count the number of PozoRecursos
     * const count = await prisma.pozoRecurso.count({
     *   where: {
     *     // ... the filter for the PozoRecursos we want to count
     *   }
     * })
    **/
    count<T extends PozoRecursoCountArgs>(
      args?: Subset<T, PozoRecursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PozoRecursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PozoRecurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoRecursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PozoRecursoAggregateArgs>(args: Subset<T, PozoRecursoAggregateArgs>): Prisma.PrismaPromise<GetPozoRecursoAggregateType<T>>

    /**
     * Group by PozoRecurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoRecursoGroupByArgs} args - Group by arguments.
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
      T extends PozoRecursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PozoRecursoGroupByArgs['orderBy'] }
        : { orderBy?: PozoRecursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PozoRecursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPozoRecursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PozoRecurso model
   */
  readonly fields: PozoRecursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PozoRecurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PozoRecursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoRecurso<T extends TipoRecursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoRecursoDefaultArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    fluido<T extends FluidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FluidoDefaultArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PozoRecurso model
   */ 
  interface PozoRecursoFieldRefs {
    readonly id: FieldRef<"PozoRecurso", 'Int'>
    readonly cantidad: FieldRef<"PozoRecurso", 'Int'>
    readonly mes: FieldRef<"PozoRecurso", 'Int'>
    readonly anio: FieldRef<"PozoRecurso", 'Int'>
    readonly observaciones: FieldRef<"PozoRecurso", 'String'>
    readonly tipoRecursoId: FieldRef<"PozoRecurso", 'Int'>
    readonly fluidoId: FieldRef<"PozoRecurso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PozoRecurso findUnique
   */
  export type PozoRecursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which PozoRecurso to fetch.
     */
    where: PozoRecursoWhereUniqueInput
  }

  /**
   * PozoRecurso findUniqueOrThrow
   */
  export type PozoRecursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which PozoRecurso to fetch.
     */
    where: PozoRecursoWhereUniqueInput
  }

  /**
   * PozoRecurso findFirst
   */
  export type PozoRecursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which PozoRecurso to fetch.
     */
    where?: PozoRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PozoRecursos to fetch.
     */
    orderBy?: PozoRecursoOrderByWithRelationInput | PozoRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PozoRecursos.
     */
    cursor?: PozoRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PozoRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PozoRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PozoRecursos.
     */
    distinct?: PozoRecursoScalarFieldEnum | PozoRecursoScalarFieldEnum[]
  }

  /**
   * PozoRecurso findFirstOrThrow
   */
  export type PozoRecursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which PozoRecurso to fetch.
     */
    where?: PozoRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PozoRecursos to fetch.
     */
    orderBy?: PozoRecursoOrderByWithRelationInput | PozoRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PozoRecursos.
     */
    cursor?: PozoRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PozoRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PozoRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PozoRecursos.
     */
    distinct?: PozoRecursoScalarFieldEnum | PozoRecursoScalarFieldEnum[]
  }

  /**
   * PozoRecurso findMany
   */
  export type PozoRecursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which PozoRecursos to fetch.
     */
    where?: PozoRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PozoRecursos to fetch.
     */
    orderBy?: PozoRecursoOrderByWithRelationInput | PozoRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PozoRecursos.
     */
    cursor?: PozoRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PozoRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PozoRecursos.
     */
    skip?: number
    distinct?: PozoRecursoScalarFieldEnum | PozoRecursoScalarFieldEnum[]
  }

  /**
   * PozoRecurso create
   */
  export type PozoRecursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * The data needed to create a PozoRecurso.
     */
    data: XOR<PozoRecursoCreateInput, PozoRecursoUncheckedCreateInput>
  }

  /**
   * PozoRecurso createMany
   */
  export type PozoRecursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PozoRecursos.
     */
    data: PozoRecursoCreateManyInput | PozoRecursoCreateManyInput[]
  }

  /**
   * PozoRecurso createManyAndReturn
   */
  export type PozoRecursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PozoRecursos.
     */
    data: PozoRecursoCreateManyInput | PozoRecursoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PozoRecurso update
   */
  export type PozoRecursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * The data needed to update a PozoRecurso.
     */
    data: XOR<PozoRecursoUpdateInput, PozoRecursoUncheckedUpdateInput>
    /**
     * Choose, which PozoRecurso to update.
     */
    where: PozoRecursoWhereUniqueInput
  }

  /**
   * PozoRecurso updateMany
   */
  export type PozoRecursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PozoRecursos.
     */
    data: XOR<PozoRecursoUpdateManyMutationInput, PozoRecursoUncheckedUpdateManyInput>
    /**
     * Filter which PozoRecursos to update
     */
    where?: PozoRecursoWhereInput
  }

  /**
   * PozoRecurso upsert
   */
  export type PozoRecursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * The filter to search for the PozoRecurso to update in case it exists.
     */
    where: PozoRecursoWhereUniqueInput
    /**
     * In case the PozoRecurso found by the `where` argument doesn't exist, create a new PozoRecurso with this data.
     */
    create: XOR<PozoRecursoCreateInput, PozoRecursoUncheckedCreateInput>
    /**
     * In case the PozoRecurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PozoRecursoUpdateInput, PozoRecursoUncheckedUpdateInput>
  }

  /**
   * PozoRecurso delete
   */
  export type PozoRecursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    /**
     * Filter which PozoRecurso to delete.
     */
    where: PozoRecursoWhereUniqueInput
  }

  /**
   * PozoRecurso deleteMany
   */
  export type PozoRecursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PozoRecursos to delete
     */
    where?: PozoRecursoWhereInput
  }

  /**
   * PozoRecurso without action
   */
  export type PozoRecursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
  }


  /**
   * Model Sistema
   */

  export type AggregateSistema = {
    _count: SistemaCountAggregateOutputType | null
    _avg: SistemaAvgAggregateOutputType | null
    _sum: SistemaSumAggregateOutputType | null
    _min: SistemaMinAggregateOutputType | null
    _max: SistemaMaxAggregateOutputType | null
  }

  export type SistemaAvgAggregateOutputType = {
    id: number | null
  }

  export type SistemaSumAggregateOutputType = {
    id: number | null
  }

  export type SistemaMinAggregateOutputType = {
    id: number | null
    nombreSistema: string | null
    sigla: string | null
  }

  export type SistemaMaxAggregateOutputType = {
    id: number | null
    nombreSistema: string | null
    sigla: string | null
  }

  export type SistemaCountAggregateOutputType = {
    id: number
    nombreSistema: number
    sigla: number
    _all: number
  }


  export type SistemaAvgAggregateInputType = {
    id?: true
  }

  export type SistemaSumAggregateInputType = {
    id?: true
  }

  export type SistemaMinAggregateInputType = {
    id?: true
    nombreSistema?: true
    sigla?: true
  }

  export type SistemaMaxAggregateInputType = {
    id?: true
    nombreSistema?: true
    sigla?: true
  }

  export type SistemaCountAggregateInputType = {
    id?: true
    nombreSistema?: true
    sigla?: true
    _all?: true
  }

  export type SistemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sistema to aggregate.
     */
    where?: SistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sistemas to fetch.
     */
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sistemas
    **/
    _count?: true | SistemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SistemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SistemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SistemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SistemaMaxAggregateInputType
  }

  export type GetSistemaAggregateType<T extends SistemaAggregateArgs> = {
        [P in keyof T & keyof AggregateSistema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSistema[P]>
      : GetScalarType<T[P], AggregateSistema[P]>
  }




  export type SistemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SistemaWhereInput
    orderBy?: SistemaOrderByWithAggregationInput | SistemaOrderByWithAggregationInput[]
    by: SistemaScalarFieldEnum[] | SistemaScalarFieldEnum
    having?: SistemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SistemaCountAggregateInputType | true
    _avg?: SistemaAvgAggregateInputType
    _sum?: SistemaSumAggregateInputType
    _min?: SistemaMinAggregateInputType
    _max?: SistemaMaxAggregateInputType
  }

  export type SistemaGroupByOutputType = {
    id: number
    nombreSistema: string
    sigla: string
    _count: SistemaCountAggregateOutputType | null
    _avg: SistemaAvgAggregateOutputType | null
    _sum: SistemaSumAggregateOutputType | null
    _min: SistemaMinAggregateOutputType | null
    _max: SistemaMaxAggregateOutputType | null
  }

  type GetSistemaGroupByPayload<T extends SistemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SistemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SistemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SistemaGroupByOutputType[P]>
            : GetScalarType<T[P], SistemaGroupByOutputType[P]>
        }
      >
    >


  export type SistemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreSistema?: boolean
    sigla?: boolean
    pozos?: boolean | Sistema$pozosArgs<ExtArgs>
    _count?: boolean | SistemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sistema"]>

  export type SistemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreSistema?: boolean
    sigla?: boolean
  }, ExtArgs["result"]["sistema"]>

  export type SistemaSelectScalar = {
    id?: boolean
    nombreSistema?: boolean
    sigla?: boolean
  }

  export type SistemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pozos?: boolean | Sistema$pozosArgs<ExtArgs>
    _count?: boolean | SistemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SistemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SistemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sistema"
    objects: {
      pozos: Prisma.$PozoSistemaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombreSistema: string
      sigla: string
    }, ExtArgs["result"]["sistema"]>
    composites: {}
  }

  type SistemaGetPayload<S extends boolean | null | undefined | SistemaDefaultArgs> = $Result.GetResult<Prisma.$SistemaPayload, S>

  type SistemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SistemaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SistemaCountAggregateInputType | true
    }

  export interface SistemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sistema'], meta: { name: 'Sistema' } }
    /**
     * Find zero or one Sistema that matches the filter.
     * @param {SistemaFindUniqueArgs} args - Arguments to find a Sistema
     * @example
     * // Get one Sistema
     * const sistema = await prisma.sistema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SistemaFindUniqueArgs>(args: SelectSubset<T, SistemaFindUniqueArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sistema that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SistemaFindUniqueOrThrowArgs} args - Arguments to find a Sistema
     * @example
     * // Get one Sistema
     * const sistema = await prisma.sistema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SistemaFindUniqueOrThrowArgs>(args: SelectSubset<T, SistemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sistema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaFindFirstArgs} args - Arguments to find a Sistema
     * @example
     * // Get one Sistema
     * const sistema = await prisma.sistema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SistemaFindFirstArgs>(args?: SelectSubset<T, SistemaFindFirstArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sistema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaFindFirstOrThrowArgs} args - Arguments to find a Sistema
     * @example
     * // Get one Sistema
     * const sistema = await prisma.sistema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SistemaFindFirstOrThrowArgs>(args?: SelectSubset<T, SistemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sistemas
     * const sistemas = await prisma.sistema.findMany()
     * 
     * // Get first 10 Sistemas
     * const sistemas = await prisma.sistema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sistemaWithIdOnly = await prisma.sistema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SistemaFindManyArgs>(args?: SelectSubset<T, SistemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sistema.
     * @param {SistemaCreateArgs} args - Arguments to create a Sistema.
     * @example
     * // Create one Sistema
     * const Sistema = await prisma.sistema.create({
     *   data: {
     *     // ... data to create a Sistema
     *   }
     * })
     * 
     */
    create<T extends SistemaCreateArgs>(args: SelectSubset<T, SistemaCreateArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sistemas.
     * @param {SistemaCreateManyArgs} args - Arguments to create many Sistemas.
     * @example
     * // Create many Sistemas
     * const sistema = await prisma.sistema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SistemaCreateManyArgs>(args?: SelectSubset<T, SistemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sistemas and returns the data saved in the database.
     * @param {SistemaCreateManyAndReturnArgs} args - Arguments to create many Sistemas.
     * @example
     * // Create many Sistemas
     * const sistema = await prisma.sistema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sistemas and only return the `id`
     * const sistemaWithIdOnly = await prisma.sistema.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SistemaCreateManyAndReturnArgs>(args?: SelectSubset<T, SistemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sistema.
     * @param {SistemaDeleteArgs} args - Arguments to delete one Sistema.
     * @example
     * // Delete one Sistema
     * const Sistema = await prisma.sistema.delete({
     *   where: {
     *     // ... filter to delete one Sistema
     *   }
     * })
     * 
     */
    delete<T extends SistemaDeleteArgs>(args: SelectSubset<T, SistemaDeleteArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sistema.
     * @param {SistemaUpdateArgs} args - Arguments to update one Sistema.
     * @example
     * // Update one Sistema
     * const sistema = await prisma.sistema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SistemaUpdateArgs>(args: SelectSubset<T, SistemaUpdateArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sistemas.
     * @param {SistemaDeleteManyArgs} args - Arguments to filter Sistemas to delete.
     * @example
     * // Delete a few Sistemas
     * const { count } = await prisma.sistema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SistemaDeleteManyArgs>(args?: SelectSubset<T, SistemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sistemas
     * const sistema = await prisma.sistema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SistemaUpdateManyArgs>(args: SelectSubset<T, SistemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sistema.
     * @param {SistemaUpsertArgs} args - Arguments to update or create a Sistema.
     * @example
     * // Update or create a Sistema
     * const sistema = await prisma.sistema.upsert({
     *   create: {
     *     // ... data to create a Sistema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sistema we want to update
     *   }
     * })
     */
    upsert<T extends SistemaUpsertArgs>(args: SelectSubset<T, SistemaUpsertArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaCountArgs} args - Arguments to filter Sistemas to count.
     * @example
     * // Count the number of Sistemas
     * const count = await prisma.sistema.count({
     *   where: {
     *     // ... the filter for the Sistemas we want to count
     *   }
     * })
    **/
    count<T extends SistemaCountArgs>(
      args?: Subset<T, SistemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SistemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SistemaAggregateArgs>(args: Subset<T, SistemaAggregateArgs>): Prisma.PrismaPromise<GetSistemaAggregateType<T>>

    /**
     * Group by Sistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SistemaGroupByArgs} args - Group by arguments.
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
      T extends SistemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SistemaGroupByArgs['orderBy'] }
        : { orderBy?: SistemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SistemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSistemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sistema model
   */
  readonly fields: SistemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sistema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SistemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pozos<T extends Sistema$pozosArgs<ExtArgs> = {}>(args?: Subset<T, Sistema$pozosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Sistema model
   */ 
  interface SistemaFieldRefs {
    readonly id: FieldRef<"Sistema", 'Int'>
    readonly nombreSistema: FieldRef<"Sistema", 'String'>
    readonly sigla: FieldRef<"Sistema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sistema findUnique
   */
  export type SistemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistema to fetch.
     */
    where: SistemaWhereUniqueInput
  }

  /**
   * Sistema findUniqueOrThrow
   */
  export type SistemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistema to fetch.
     */
    where: SistemaWhereUniqueInput
  }

  /**
   * Sistema findFirst
   */
  export type SistemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistema to fetch.
     */
    where?: SistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sistemas to fetch.
     */
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sistemas.
     */
    cursor?: SistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sistemas.
     */
    distinct?: SistemaScalarFieldEnum | SistemaScalarFieldEnum[]
  }

  /**
   * Sistema findFirstOrThrow
   */
  export type SistemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistema to fetch.
     */
    where?: SistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sistemas to fetch.
     */
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sistemas.
     */
    cursor?: SistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sistemas.
     */
    distinct?: SistemaScalarFieldEnum | SistemaScalarFieldEnum[]
  }

  /**
   * Sistema findMany
   */
  export type SistemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter, which Sistemas to fetch.
     */
    where?: SistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sistemas to fetch.
     */
    orderBy?: SistemaOrderByWithRelationInput | SistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sistemas.
     */
    cursor?: SistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sistemas.
     */
    skip?: number
    distinct?: SistemaScalarFieldEnum | SistemaScalarFieldEnum[]
  }

  /**
   * Sistema create
   */
  export type SistemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sistema.
     */
    data: XOR<SistemaCreateInput, SistemaUncheckedCreateInput>
  }

  /**
   * Sistema createMany
   */
  export type SistemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sistemas.
     */
    data: SistemaCreateManyInput | SistemaCreateManyInput[]
  }

  /**
   * Sistema createManyAndReturn
   */
  export type SistemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sistemas.
     */
    data: SistemaCreateManyInput | SistemaCreateManyInput[]
  }

  /**
   * Sistema update
   */
  export type SistemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sistema.
     */
    data: XOR<SistemaUpdateInput, SistemaUncheckedUpdateInput>
    /**
     * Choose, which Sistema to update.
     */
    where: SistemaWhereUniqueInput
  }

  /**
   * Sistema updateMany
   */
  export type SistemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sistemas.
     */
    data: XOR<SistemaUpdateManyMutationInput, SistemaUncheckedUpdateManyInput>
    /**
     * Filter which Sistemas to update
     */
    where?: SistemaWhereInput
  }

  /**
   * Sistema upsert
   */
  export type SistemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sistema to update in case it exists.
     */
    where: SistemaWhereUniqueInput
    /**
     * In case the Sistema found by the `where` argument doesn't exist, create a new Sistema with this data.
     */
    create: XOR<SistemaCreateInput, SistemaUncheckedCreateInput>
    /**
     * In case the Sistema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SistemaUpdateInput, SistemaUncheckedUpdateInput>
  }

  /**
   * Sistema delete
   */
  export type SistemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
    /**
     * Filter which Sistema to delete.
     */
    where: SistemaWhereUniqueInput
  }

  /**
   * Sistema deleteMany
   */
  export type SistemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sistemas to delete
     */
    where?: SistemaWhereInput
  }

  /**
   * Sistema.pozos
   */
  export type Sistema$pozosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    where?: PozoSistemaWhereInput
    orderBy?: PozoSistemaOrderByWithRelationInput | PozoSistemaOrderByWithRelationInput[]
    cursor?: PozoSistemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PozoSistemaScalarFieldEnum | PozoSistemaScalarFieldEnum[]
  }

  /**
   * Sistema without action
   */
  export type SistemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sistema
     */
    select?: SistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SistemaInclude<ExtArgs> | null
  }


  /**
   * Model PozoSistema
   */

  export type AggregatePozoSistema = {
    _count: PozoSistemaCountAggregateOutputType | null
    _avg: PozoSistemaAvgAggregateOutputType | null
    _sum: PozoSistemaSumAggregateOutputType | null
    _min: PozoSistemaMinAggregateOutputType | null
    _max: PozoSistemaMaxAggregateOutputType | null
  }

  export type PozoSistemaAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    sistemaId: number | null
  }

  export type PozoSistemaSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    sistemaId: number | null
  }

  export type PozoSistemaMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    sistemaId: number | null
  }

  export type PozoSistemaMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    sistemaId: number | null
  }

  export type PozoSistemaCountAggregateOutputType = {
    id: number
    cantidad: number
    mes: number
    anio: number
    observaciones: number
    sistemaId: number
    _all: number
  }


  export type PozoSistemaAvgAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    sistemaId?: true
  }

  export type PozoSistemaSumAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    sistemaId?: true
  }

  export type PozoSistemaMinAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    sistemaId?: true
  }

  export type PozoSistemaMaxAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    sistemaId?: true
  }

  export type PozoSistemaCountAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    sistemaId?: true
    _all?: true
  }

  export type PozoSistemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PozoSistema to aggregate.
     */
    where?: PozoSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PozoSistemas to fetch.
     */
    orderBy?: PozoSistemaOrderByWithRelationInput | PozoSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PozoSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PozoSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PozoSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PozoSistemas
    **/
    _count?: true | PozoSistemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PozoSistemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PozoSistemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PozoSistemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PozoSistemaMaxAggregateInputType
  }

  export type GetPozoSistemaAggregateType<T extends PozoSistemaAggregateArgs> = {
        [P in keyof T & keyof AggregatePozoSistema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePozoSistema[P]>
      : GetScalarType<T[P], AggregatePozoSistema[P]>
  }




  export type PozoSistemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PozoSistemaWhereInput
    orderBy?: PozoSistemaOrderByWithAggregationInput | PozoSistemaOrderByWithAggregationInput[]
    by: PozoSistemaScalarFieldEnum[] | PozoSistemaScalarFieldEnum
    having?: PozoSistemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PozoSistemaCountAggregateInputType | true
    _avg?: PozoSistemaAvgAggregateInputType
    _sum?: PozoSistemaSumAggregateInputType
    _min?: PozoSistemaMinAggregateInputType
    _max?: PozoSistemaMaxAggregateInputType
  }

  export type PozoSistemaGroupByOutputType = {
    id: number
    cantidad: number
    mes: number | null
    anio: number
    observaciones: string | null
    sistemaId: number
    _count: PozoSistemaCountAggregateOutputType | null
    _avg: PozoSistemaAvgAggregateOutputType | null
    _sum: PozoSistemaSumAggregateOutputType | null
    _min: PozoSistemaMinAggregateOutputType | null
    _max: PozoSistemaMaxAggregateOutputType | null
  }

  type GetPozoSistemaGroupByPayload<T extends PozoSistemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PozoSistemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PozoSistemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PozoSistemaGroupByOutputType[P]>
            : GetScalarType<T[P], PozoSistemaGroupByOutputType[P]>
        }
      >
    >


  export type PozoSistemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    sistemaId?: boolean
    sistema?: boolean | SistemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pozoSistema"]>

  export type PozoSistemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    sistemaId?: boolean
    sistema?: boolean | SistemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pozoSistema"]>

  export type PozoSistemaSelectScalar = {
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    sistemaId?: boolean
  }

  export type PozoSistemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sistema?: boolean | SistemaDefaultArgs<ExtArgs>
  }
  export type PozoSistemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sistema?: boolean | SistemaDefaultArgs<ExtArgs>
  }

  export type $PozoSistemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PozoSistema"
    objects: {
      sistema: Prisma.$SistemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      mes: number | null
      anio: number
      observaciones: string | null
      sistemaId: number
    }, ExtArgs["result"]["pozoSistema"]>
    composites: {}
  }

  type PozoSistemaGetPayload<S extends boolean | null | undefined | PozoSistemaDefaultArgs> = $Result.GetResult<Prisma.$PozoSistemaPayload, S>

  type PozoSistemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PozoSistemaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PozoSistemaCountAggregateInputType | true
    }

  export interface PozoSistemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PozoSistema'], meta: { name: 'PozoSistema' } }
    /**
     * Find zero or one PozoSistema that matches the filter.
     * @param {PozoSistemaFindUniqueArgs} args - Arguments to find a PozoSistema
     * @example
     * // Get one PozoSistema
     * const pozoSistema = await prisma.pozoSistema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PozoSistemaFindUniqueArgs>(args: SelectSubset<T, PozoSistemaFindUniqueArgs<ExtArgs>>): Prisma__PozoSistemaClient<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PozoSistema that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PozoSistemaFindUniqueOrThrowArgs} args - Arguments to find a PozoSistema
     * @example
     * // Get one PozoSistema
     * const pozoSistema = await prisma.pozoSistema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PozoSistemaFindUniqueOrThrowArgs>(args: SelectSubset<T, PozoSistemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PozoSistemaClient<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PozoSistema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoSistemaFindFirstArgs} args - Arguments to find a PozoSistema
     * @example
     * // Get one PozoSistema
     * const pozoSistema = await prisma.pozoSistema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PozoSistemaFindFirstArgs>(args?: SelectSubset<T, PozoSistemaFindFirstArgs<ExtArgs>>): Prisma__PozoSistemaClient<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PozoSistema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoSistemaFindFirstOrThrowArgs} args - Arguments to find a PozoSistema
     * @example
     * // Get one PozoSistema
     * const pozoSistema = await prisma.pozoSistema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PozoSistemaFindFirstOrThrowArgs>(args?: SelectSubset<T, PozoSistemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PozoSistemaClient<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PozoSistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoSistemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PozoSistemas
     * const pozoSistemas = await prisma.pozoSistema.findMany()
     * 
     * // Get first 10 PozoSistemas
     * const pozoSistemas = await prisma.pozoSistema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pozoSistemaWithIdOnly = await prisma.pozoSistema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PozoSistemaFindManyArgs>(args?: SelectSubset<T, PozoSistemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PozoSistema.
     * @param {PozoSistemaCreateArgs} args - Arguments to create a PozoSistema.
     * @example
     * // Create one PozoSistema
     * const PozoSistema = await prisma.pozoSistema.create({
     *   data: {
     *     // ... data to create a PozoSistema
     *   }
     * })
     * 
     */
    create<T extends PozoSistemaCreateArgs>(args: SelectSubset<T, PozoSistemaCreateArgs<ExtArgs>>): Prisma__PozoSistemaClient<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PozoSistemas.
     * @param {PozoSistemaCreateManyArgs} args - Arguments to create many PozoSistemas.
     * @example
     * // Create many PozoSistemas
     * const pozoSistema = await prisma.pozoSistema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PozoSistemaCreateManyArgs>(args?: SelectSubset<T, PozoSistemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PozoSistemas and returns the data saved in the database.
     * @param {PozoSistemaCreateManyAndReturnArgs} args - Arguments to create many PozoSistemas.
     * @example
     * // Create many PozoSistemas
     * const pozoSistema = await prisma.pozoSistema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PozoSistemas and only return the `id`
     * const pozoSistemaWithIdOnly = await prisma.pozoSistema.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PozoSistemaCreateManyAndReturnArgs>(args?: SelectSubset<T, PozoSistemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PozoSistema.
     * @param {PozoSistemaDeleteArgs} args - Arguments to delete one PozoSistema.
     * @example
     * // Delete one PozoSistema
     * const PozoSistema = await prisma.pozoSistema.delete({
     *   where: {
     *     // ... filter to delete one PozoSistema
     *   }
     * })
     * 
     */
    delete<T extends PozoSistemaDeleteArgs>(args: SelectSubset<T, PozoSistemaDeleteArgs<ExtArgs>>): Prisma__PozoSistemaClient<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PozoSistema.
     * @param {PozoSistemaUpdateArgs} args - Arguments to update one PozoSistema.
     * @example
     * // Update one PozoSistema
     * const pozoSistema = await prisma.pozoSistema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PozoSistemaUpdateArgs>(args: SelectSubset<T, PozoSistemaUpdateArgs<ExtArgs>>): Prisma__PozoSistemaClient<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PozoSistemas.
     * @param {PozoSistemaDeleteManyArgs} args - Arguments to filter PozoSistemas to delete.
     * @example
     * // Delete a few PozoSistemas
     * const { count } = await prisma.pozoSistema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PozoSistemaDeleteManyArgs>(args?: SelectSubset<T, PozoSistemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PozoSistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoSistemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PozoSistemas
     * const pozoSistema = await prisma.pozoSistema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PozoSistemaUpdateManyArgs>(args: SelectSubset<T, PozoSistemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PozoSistema.
     * @param {PozoSistemaUpsertArgs} args - Arguments to update or create a PozoSistema.
     * @example
     * // Update or create a PozoSistema
     * const pozoSistema = await prisma.pozoSistema.upsert({
     *   create: {
     *     // ... data to create a PozoSistema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PozoSistema we want to update
     *   }
     * })
     */
    upsert<T extends PozoSistemaUpsertArgs>(args: SelectSubset<T, PozoSistemaUpsertArgs<ExtArgs>>): Prisma__PozoSistemaClient<$Result.GetResult<Prisma.$PozoSistemaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PozoSistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoSistemaCountArgs} args - Arguments to filter PozoSistemas to count.
     * @example
     * // Count the number of PozoSistemas
     * const count = await prisma.pozoSistema.count({
     *   where: {
     *     // ... the filter for the PozoSistemas we want to count
     *   }
     * })
    **/
    count<T extends PozoSistemaCountArgs>(
      args?: Subset<T, PozoSistemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PozoSistemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PozoSistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoSistemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PozoSistemaAggregateArgs>(args: Subset<T, PozoSistemaAggregateArgs>): Prisma.PrismaPromise<GetPozoSistemaAggregateType<T>>

    /**
     * Group by PozoSistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PozoSistemaGroupByArgs} args - Group by arguments.
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
      T extends PozoSistemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PozoSistemaGroupByArgs['orderBy'] }
        : { orderBy?: PozoSistemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PozoSistemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPozoSistemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PozoSistema model
   */
  readonly fields: PozoSistemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PozoSistema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PozoSistemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sistema<T extends SistemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SistemaDefaultArgs<ExtArgs>>): Prisma__SistemaClient<$Result.GetResult<Prisma.$SistemaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PozoSistema model
   */ 
  interface PozoSistemaFieldRefs {
    readonly id: FieldRef<"PozoSistema", 'Int'>
    readonly cantidad: FieldRef<"PozoSistema", 'Int'>
    readonly mes: FieldRef<"PozoSistema", 'Int'>
    readonly anio: FieldRef<"PozoSistema", 'Int'>
    readonly observaciones: FieldRef<"PozoSistema", 'String'>
    readonly sistemaId: FieldRef<"PozoSistema", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PozoSistema findUnique
   */
  export type PozoSistemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * Filter, which PozoSistema to fetch.
     */
    where: PozoSistemaWhereUniqueInput
  }

  /**
   * PozoSistema findUniqueOrThrow
   */
  export type PozoSistemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * Filter, which PozoSistema to fetch.
     */
    where: PozoSistemaWhereUniqueInput
  }

  /**
   * PozoSistema findFirst
   */
  export type PozoSistemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * Filter, which PozoSistema to fetch.
     */
    where?: PozoSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PozoSistemas to fetch.
     */
    orderBy?: PozoSistemaOrderByWithRelationInput | PozoSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PozoSistemas.
     */
    cursor?: PozoSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PozoSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PozoSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PozoSistemas.
     */
    distinct?: PozoSistemaScalarFieldEnum | PozoSistemaScalarFieldEnum[]
  }

  /**
   * PozoSistema findFirstOrThrow
   */
  export type PozoSistemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * Filter, which PozoSistema to fetch.
     */
    where?: PozoSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PozoSistemas to fetch.
     */
    orderBy?: PozoSistemaOrderByWithRelationInput | PozoSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PozoSistemas.
     */
    cursor?: PozoSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PozoSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PozoSistemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PozoSistemas.
     */
    distinct?: PozoSistemaScalarFieldEnum | PozoSistemaScalarFieldEnum[]
  }

  /**
   * PozoSistema findMany
   */
  export type PozoSistemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * Filter, which PozoSistemas to fetch.
     */
    where?: PozoSistemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PozoSistemas to fetch.
     */
    orderBy?: PozoSistemaOrderByWithRelationInput | PozoSistemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PozoSistemas.
     */
    cursor?: PozoSistemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PozoSistemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PozoSistemas.
     */
    skip?: number
    distinct?: PozoSistemaScalarFieldEnum | PozoSistemaScalarFieldEnum[]
  }

  /**
   * PozoSistema create
   */
  export type PozoSistemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * The data needed to create a PozoSistema.
     */
    data: XOR<PozoSistemaCreateInput, PozoSistemaUncheckedCreateInput>
  }

  /**
   * PozoSistema createMany
   */
  export type PozoSistemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PozoSistemas.
     */
    data: PozoSistemaCreateManyInput | PozoSistemaCreateManyInput[]
  }

  /**
   * PozoSistema createManyAndReturn
   */
  export type PozoSistemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PozoSistemas.
     */
    data: PozoSistemaCreateManyInput | PozoSistemaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PozoSistema update
   */
  export type PozoSistemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * The data needed to update a PozoSistema.
     */
    data: XOR<PozoSistemaUpdateInput, PozoSistemaUncheckedUpdateInput>
    /**
     * Choose, which PozoSistema to update.
     */
    where: PozoSistemaWhereUniqueInput
  }

  /**
   * PozoSistema updateMany
   */
  export type PozoSistemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PozoSistemas.
     */
    data: XOR<PozoSistemaUpdateManyMutationInput, PozoSistemaUncheckedUpdateManyInput>
    /**
     * Filter which PozoSistemas to update
     */
    where?: PozoSistemaWhereInput
  }

  /**
   * PozoSistema upsert
   */
  export type PozoSistemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * The filter to search for the PozoSistema to update in case it exists.
     */
    where: PozoSistemaWhereUniqueInput
    /**
     * In case the PozoSistema found by the `where` argument doesn't exist, create a new PozoSistema with this data.
     */
    create: XOR<PozoSistemaCreateInput, PozoSistemaUncheckedCreateInput>
    /**
     * In case the PozoSistema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PozoSistemaUpdateInput, PozoSistemaUncheckedUpdateInput>
  }

  /**
   * PozoSistema delete
   */
  export type PozoSistemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
    /**
     * Filter which PozoSistema to delete.
     */
    where: PozoSistemaWhereUniqueInput
  }

  /**
   * PozoSistema deleteMany
   */
  export type PozoSistemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PozoSistemas to delete
     */
    where?: PozoSistemaWhereInput
  }

  /**
   * PozoSistema without action
   */
  export type PozoSistemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoSistema
     */
    select?: PozoSistemaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoSistemaInclude<ExtArgs> | null
  }


  /**
   * Model ProduccionEmpresa
   */

  export type AggregateProduccionEmpresa = {
    _count: ProduccionEmpresaCountAggregateOutputType | null
    _avg: ProduccionEmpresaAvgAggregateOutputType | null
    _sum: ProduccionEmpresaSumAggregateOutputType | null
    _min: ProduccionEmpresaMinAggregateOutputType | null
    _max: ProduccionEmpresaMaxAggregateOutputType | null
  }

  export type ProduccionEmpresaAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    fluidoId: number | null
    empresaId: number | null
  }

  export type ProduccionEmpresaSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    fluidoId: number | null
    empresaId: number | null
  }

  export type ProduccionEmpresaMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    fluidoId: number | null
    empresaId: number | null
  }

  export type ProduccionEmpresaMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    fluidoId: number | null
    empresaId: number | null
  }

  export type ProduccionEmpresaCountAggregateOutputType = {
    id: number
    cantidad: number
    mes: number
    anio: number
    observaciones: number
    fluidoId: number
    empresaId: number
    _all: number
  }


  export type ProduccionEmpresaAvgAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    fluidoId?: true
    empresaId?: true
  }

  export type ProduccionEmpresaSumAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    fluidoId?: true
    empresaId?: true
  }

  export type ProduccionEmpresaMinAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    empresaId?: true
  }

  export type ProduccionEmpresaMaxAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    empresaId?: true
  }

  export type ProduccionEmpresaCountAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    empresaId?: true
    _all?: true
  }

  export type ProduccionEmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProduccionEmpresa to aggregate.
     */
    where?: ProduccionEmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionEmpresas to fetch.
     */
    orderBy?: ProduccionEmpresaOrderByWithRelationInput | ProduccionEmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduccionEmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionEmpresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionEmpresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProduccionEmpresas
    **/
    _count?: true | ProduccionEmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduccionEmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduccionEmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduccionEmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduccionEmpresaMaxAggregateInputType
  }

  export type GetProduccionEmpresaAggregateType<T extends ProduccionEmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateProduccionEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduccionEmpresa[P]>
      : GetScalarType<T[P], AggregateProduccionEmpresa[P]>
  }




  export type ProduccionEmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionEmpresaWhereInput
    orderBy?: ProduccionEmpresaOrderByWithAggregationInput | ProduccionEmpresaOrderByWithAggregationInput[]
    by: ProduccionEmpresaScalarFieldEnum[] | ProduccionEmpresaScalarFieldEnum
    having?: ProduccionEmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduccionEmpresaCountAggregateInputType | true
    _avg?: ProduccionEmpresaAvgAggregateInputType
    _sum?: ProduccionEmpresaSumAggregateInputType
    _min?: ProduccionEmpresaMinAggregateInputType
    _max?: ProduccionEmpresaMaxAggregateInputType
  }

  export type ProduccionEmpresaGroupByOutputType = {
    id: number
    cantidad: number
    mes: number | null
    anio: number
    observaciones: string | null
    fluidoId: number
    empresaId: number
    _count: ProduccionEmpresaCountAggregateOutputType | null
    _avg: ProduccionEmpresaAvgAggregateOutputType | null
    _sum: ProduccionEmpresaSumAggregateOutputType | null
    _min: ProduccionEmpresaMinAggregateOutputType | null
    _max: ProduccionEmpresaMaxAggregateOutputType | null
  }

  type GetProduccionEmpresaGroupByPayload<T extends ProduccionEmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduccionEmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduccionEmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduccionEmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], ProduccionEmpresaGroupByOutputType[P]>
        }
      >
    >


  export type ProduccionEmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    empresaId?: boolean
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produccionEmpresa"]>

  export type ProduccionEmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    empresaId?: boolean
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produccionEmpresa"]>

  export type ProduccionEmpresaSelectScalar = {
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    empresaId?: boolean
  }

  export type ProduccionEmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type ProduccionEmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $ProduccionEmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProduccionEmpresa"
    objects: {
      fluido: Prisma.$FluidoPayload<ExtArgs>
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      mes: number | null
      anio: number
      observaciones: string | null
      fluidoId: number
      empresaId: number
    }, ExtArgs["result"]["produccionEmpresa"]>
    composites: {}
  }

  type ProduccionEmpresaGetPayload<S extends boolean | null | undefined | ProduccionEmpresaDefaultArgs> = $Result.GetResult<Prisma.$ProduccionEmpresaPayload, S>

  type ProduccionEmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProduccionEmpresaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProduccionEmpresaCountAggregateInputType | true
    }

  export interface ProduccionEmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProduccionEmpresa'], meta: { name: 'ProduccionEmpresa' } }
    /**
     * Find zero or one ProduccionEmpresa that matches the filter.
     * @param {ProduccionEmpresaFindUniqueArgs} args - Arguments to find a ProduccionEmpresa
     * @example
     * // Get one ProduccionEmpresa
     * const produccionEmpresa = await prisma.produccionEmpresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduccionEmpresaFindUniqueArgs>(args: SelectSubset<T, ProduccionEmpresaFindUniqueArgs<ExtArgs>>): Prisma__ProduccionEmpresaClient<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProduccionEmpresa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProduccionEmpresaFindUniqueOrThrowArgs} args - Arguments to find a ProduccionEmpresa
     * @example
     * // Get one ProduccionEmpresa
     * const produccionEmpresa = await prisma.produccionEmpresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduccionEmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduccionEmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduccionEmpresaClient<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProduccionEmpresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionEmpresaFindFirstArgs} args - Arguments to find a ProduccionEmpresa
     * @example
     * // Get one ProduccionEmpresa
     * const produccionEmpresa = await prisma.produccionEmpresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduccionEmpresaFindFirstArgs>(args?: SelectSubset<T, ProduccionEmpresaFindFirstArgs<ExtArgs>>): Prisma__ProduccionEmpresaClient<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProduccionEmpresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionEmpresaFindFirstOrThrowArgs} args - Arguments to find a ProduccionEmpresa
     * @example
     * // Get one ProduccionEmpresa
     * const produccionEmpresa = await prisma.produccionEmpresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduccionEmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduccionEmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduccionEmpresaClient<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProduccionEmpresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionEmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProduccionEmpresas
     * const produccionEmpresas = await prisma.produccionEmpresa.findMany()
     * 
     * // Get first 10 ProduccionEmpresas
     * const produccionEmpresas = await prisma.produccionEmpresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produccionEmpresaWithIdOnly = await prisma.produccionEmpresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduccionEmpresaFindManyArgs>(args?: SelectSubset<T, ProduccionEmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProduccionEmpresa.
     * @param {ProduccionEmpresaCreateArgs} args - Arguments to create a ProduccionEmpresa.
     * @example
     * // Create one ProduccionEmpresa
     * const ProduccionEmpresa = await prisma.produccionEmpresa.create({
     *   data: {
     *     // ... data to create a ProduccionEmpresa
     *   }
     * })
     * 
     */
    create<T extends ProduccionEmpresaCreateArgs>(args: SelectSubset<T, ProduccionEmpresaCreateArgs<ExtArgs>>): Prisma__ProduccionEmpresaClient<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProduccionEmpresas.
     * @param {ProduccionEmpresaCreateManyArgs} args - Arguments to create many ProduccionEmpresas.
     * @example
     * // Create many ProduccionEmpresas
     * const produccionEmpresa = await prisma.produccionEmpresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduccionEmpresaCreateManyArgs>(args?: SelectSubset<T, ProduccionEmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProduccionEmpresas and returns the data saved in the database.
     * @param {ProduccionEmpresaCreateManyAndReturnArgs} args - Arguments to create many ProduccionEmpresas.
     * @example
     * // Create many ProduccionEmpresas
     * const produccionEmpresa = await prisma.produccionEmpresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProduccionEmpresas and only return the `id`
     * const produccionEmpresaWithIdOnly = await prisma.produccionEmpresa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduccionEmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduccionEmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProduccionEmpresa.
     * @param {ProduccionEmpresaDeleteArgs} args - Arguments to delete one ProduccionEmpresa.
     * @example
     * // Delete one ProduccionEmpresa
     * const ProduccionEmpresa = await prisma.produccionEmpresa.delete({
     *   where: {
     *     // ... filter to delete one ProduccionEmpresa
     *   }
     * })
     * 
     */
    delete<T extends ProduccionEmpresaDeleteArgs>(args: SelectSubset<T, ProduccionEmpresaDeleteArgs<ExtArgs>>): Prisma__ProduccionEmpresaClient<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProduccionEmpresa.
     * @param {ProduccionEmpresaUpdateArgs} args - Arguments to update one ProduccionEmpresa.
     * @example
     * // Update one ProduccionEmpresa
     * const produccionEmpresa = await prisma.produccionEmpresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduccionEmpresaUpdateArgs>(args: SelectSubset<T, ProduccionEmpresaUpdateArgs<ExtArgs>>): Prisma__ProduccionEmpresaClient<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProduccionEmpresas.
     * @param {ProduccionEmpresaDeleteManyArgs} args - Arguments to filter ProduccionEmpresas to delete.
     * @example
     * // Delete a few ProduccionEmpresas
     * const { count } = await prisma.produccionEmpresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduccionEmpresaDeleteManyArgs>(args?: SelectSubset<T, ProduccionEmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProduccionEmpresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionEmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProduccionEmpresas
     * const produccionEmpresa = await prisma.produccionEmpresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduccionEmpresaUpdateManyArgs>(args: SelectSubset<T, ProduccionEmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProduccionEmpresa.
     * @param {ProduccionEmpresaUpsertArgs} args - Arguments to update or create a ProduccionEmpresa.
     * @example
     * // Update or create a ProduccionEmpresa
     * const produccionEmpresa = await prisma.produccionEmpresa.upsert({
     *   create: {
     *     // ... data to create a ProduccionEmpresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProduccionEmpresa we want to update
     *   }
     * })
     */
    upsert<T extends ProduccionEmpresaUpsertArgs>(args: SelectSubset<T, ProduccionEmpresaUpsertArgs<ExtArgs>>): Prisma__ProduccionEmpresaClient<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProduccionEmpresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionEmpresaCountArgs} args - Arguments to filter ProduccionEmpresas to count.
     * @example
     * // Count the number of ProduccionEmpresas
     * const count = await prisma.produccionEmpresa.count({
     *   where: {
     *     // ... the filter for the ProduccionEmpresas we want to count
     *   }
     * })
    **/
    count<T extends ProduccionEmpresaCountArgs>(
      args?: Subset<T, ProduccionEmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduccionEmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProduccionEmpresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionEmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProduccionEmpresaAggregateArgs>(args: Subset<T, ProduccionEmpresaAggregateArgs>): Prisma.PrismaPromise<GetProduccionEmpresaAggregateType<T>>

    /**
     * Group by ProduccionEmpresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionEmpresaGroupByArgs} args - Group by arguments.
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
      T extends ProduccionEmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduccionEmpresaGroupByArgs['orderBy'] }
        : { orderBy?: ProduccionEmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProduccionEmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduccionEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProduccionEmpresa model
   */
  readonly fields: ProduccionEmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProduccionEmpresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduccionEmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fluido<T extends FluidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FluidoDefaultArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProduccionEmpresa model
   */ 
  interface ProduccionEmpresaFieldRefs {
    readonly id: FieldRef<"ProduccionEmpresa", 'Int'>
    readonly cantidad: FieldRef<"ProduccionEmpresa", 'Int'>
    readonly mes: FieldRef<"ProduccionEmpresa", 'Int'>
    readonly anio: FieldRef<"ProduccionEmpresa", 'Int'>
    readonly observaciones: FieldRef<"ProduccionEmpresa", 'String'>
    readonly fluidoId: FieldRef<"ProduccionEmpresa", 'Int'>
    readonly empresaId: FieldRef<"ProduccionEmpresa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProduccionEmpresa findUnique
   */
  export type ProduccionEmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionEmpresa to fetch.
     */
    where: ProduccionEmpresaWhereUniqueInput
  }

  /**
   * ProduccionEmpresa findUniqueOrThrow
   */
  export type ProduccionEmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionEmpresa to fetch.
     */
    where: ProduccionEmpresaWhereUniqueInput
  }

  /**
   * ProduccionEmpresa findFirst
   */
  export type ProduccionEmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionEmpresa to fetch.
     */
    where?: ProduccionEmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionEmpresas to fetch.
     */
    orderBy?: ProduccionEmpresaOrderByWithRelationInput | ProduccionEmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProduccionEmpresas.
     */
    cursor?: ProduccionEmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionEmpresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionEmpresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProduccionEmpresas.
     */
    distinct?: ProduccionEmpresaScalarFieldEnum | ProduccionEmpresaScalarFieldEnum[]
  }

  /**
   * ProduccionEmpresa findFirstOrThrow
   */
  export type ProduccionEmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionEmpresa to fetch.
     */
    where?: ProduccionEmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionEmpresas to fetch.
     */
    orderBy?: ProduccionEmpresaOrderByWithRelationInput | ProduccionEmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProduccionEmpresas.
     */
    cursor?: ProduccionEmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionEmpresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionEmpresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProduccionEmpresas.
     */
    distinct?: ProduccionEmpresaScalarFieldEnum | ProduccionEmpresaScalarFieldEnum[]
  }

  /**
   * ProduccionEmpresa findMany
   */
  export type ProduccionEmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionEmpresas to fetch.
     */
    where?: ProduccionEmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionEmpresas to fetch.
     */
    orderBy?: ProduccionEmpresaOrderByWithRelationInput | ProduccionEmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProduccionEmpresas.
     */
    cursor?: ProduccionEmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionEmpresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionEmpresas.
     */
    skip?: number
    distinct?: ProduccionEmpresaScalarFieldEnum | ProduccionEmpresaScalarFieldEnum[]
  }

  /**
   * ProduccionEmpresa create
   */
  export type ProduccionEmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProduccionEmpresa.
     */
    data: XOR<ProduccionEmpresaCreateInput, ProduccionEmpresaUncheckedCreateInput>
  }

  /**
   * ProduccionEmpresa createMany
   */
  export type ProduccionEmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProduccionEmpresas.
     */
    data: ProduccionEmpresaCreateManyInput | ProduccionEmpresaCreateManyInput[]
  }

  /**
   * ProduccionEmpresa createManyAndReturn
   */
  export type ProduccionEmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProduccionEmpresas.
     */
    data: ProduccionEmpresaCreateManyInput | ProduccionEmpresaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProduccionEmpresa update
   */
  export type ProduccionEmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProduccionEmpresa.
     */
    data: XOR<ProduccionEmpresaUpdateInput, ProduccionEmpresaUncheckedUpdateInput>
    /**
     * Choose, which ProduccionEmpresa to update.
     */
    where: ProduccionEmpresaWhereUniqueInput
  }

  /**
   * ProduccionEmpresa updateMany
   */
  export type ProduccionEmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProduccionEmpresas.
     */
    data: XOR<ProduccionEmpresaUpdateManyMutationInput, ProduccionEmpresaUncheckedUpdateManyInput>
    /**
     * Filter which ProduccionEmpresas to update
     */
    where?: ProduccionEmpresaWhereInput
  }

  /**
   * ProduccionEmpresa upsert
   */
  export type ProduccionEmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProduccionEmpresa to update in case it exists.
     */
    where: ProduccionEmpresaWhereUniqueInput
    /**
     * In case the ProduccionEmpresa found by the `where` argument doesn't exist, create a new ProduccionEmpresa with this data.
     */
    create: XOR<ProduccionEmpresaCreateInput, ProduccionEmpresaUncheckedCreateInput>
    /**
     * In case the ProduccionEmpresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduccionEmpresaUpdateInput, ProduccionEmpresaUncheckedUpdateInput>
  }

  /**
   * ProduccionEmpresa delete
   */
  export type ProduccionEmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    /**
     * Filter which ProduccionEmpresa to delete.
     */
    where: ProduccionEmpresaWhereUniqueInput
  }

  /**
   * ProduccionEmpresa deleteMany
   */
  export type ProduccionEmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProduccionEmpresas to delete
     */
    where?: ProduccionEmpresaWhereInput
  }

  /**
   * ProduccionEmpresa without action
   */
  export type ProduccionEmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
  }


  /**
   * Model ProduccionRecurso
   */

  export type AggregateProduccionRecurso = {
    _count: ProduccionRecursoCountAggregateOutputType | null
    _avg: ProduccionRecursoAvgAggregateOutputType | null
    _sum: ProduccionRecursoSumAggregateOutputType | null
    _min: ProduccionRecursoMinAggregateOutputType | null
    _max: ProduccionRecursoMaxAggregateOutputType | null
  }

  export type ProduccionRecursoAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    fluidoId: number | null
    tipoRecursoId: number | null
  }

  export type ProduccionRecursoSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    fluidoId: number | null
    tipoRecursoId: number | null
  }

  export type ProduccionRecursoMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    fluidoId: number | null
    tipoRecursoId: number | null
  }

  export type ProduccionRecursoMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    fluidoId: number | null
    tipoRecursoId: number | null
  }

  export type ProduccionRecursoCountAggregateOutputType = {
    id: number
    cantidad: number
    mes: number
    anio: number
    observaciones: number
    fluidoId: number
    tipoRecursoId: number
    _all: number
  }


  export type ProduccionRecursoAvgAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    fluidoId?: true
    tipoRecursoId?: true
  }

  export type ProduccionRecursoSumAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    fluidoId?: true
    tipoRecursoId?: true
  }

  export type ProduccionRecursoMinAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    tipoRecursoId?: true
  }

  export type ProduccionRecursoMaxAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    tipoRecursoId?: true
  }

  export type ProduccionRecursoCountAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    tipoRecursoId?: true
    _all?: true
  }

  export type ProduccionRecursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProduccionRecurso to aggregate.
     */
    where?: ProduccionRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionRecursos to fetch.
     */
    orderBy?: ProduccionRecursoOrderByWithRelationInput | ProduccionRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduccionRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProduccionRecursos
    **/
    _count?: true | ProduccionRecursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduccionRecursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduccionRecursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduccionRecursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduccionRecursoMaxAggregateInputType
  }

  export type GetProduccionRecursoAggregateType<T extends ProduccionRecursoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduccionRecurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduccionRecurso[P]>
      : GetScalarType<T[P], AggregateProduccionRecurso[P]>
  }




  export type ProduccionRecursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionRecursoWhereInput
    orderBy?: ProduccionRecursoOrderByWithAggregationInput | ProduccionRecursoOrderByWithAggregationInput[]
    by: ProduccionRecursoScalarFieldEnum[] | ProduccionRecursoScalarFieldEnum
    having?: ProduccionRecursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduccionRecursoCountAggregateInputType | true
    _avg?: ProduccionRecursoAvgAggregateInputType
    _sum?: ProduccionRecursoSumAggregateInputType
    _min?: ProduccionRecursoMinAggregateInputType
    _max?: ProduccionRecursoMaxAggregateInputType
  }

  export type ProduccionRecursoGroupByOutputType = {
    id: number
    cantidad: number
    mes: number | null
    anio: number
    observaciones: string | null
    fluidoId: number
    tipoRecursoId: number
    _count: ProduccionRecursoCountAggregateOutputType | null
    _avg: ProduccionRecursoAvgAggregateOutputType | null
    _sum: ProduccionRecursoSumAggregateOutputType | null
    _min: ProduccionRecursoMinAggregateOutputType | null
    _max: ProduccionRecursoMaxAggregateOutputType | null
  }

  type GetProduccionRecursoGroupByPayload<T extends ProduccionRecursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduccionRecursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduccionRecursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduccionRecursoGroupByOutputType[P]>
            : GetScalarType<T[P], ProduccionRecursoGroupByOutputType[P]>
        }
      >
    >


  export type ProduccionRecursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    tipoRecursoId?: boolean
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    tipoRecurso?: boolean | TipoRecursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produccionRecurso"]>

  export type ProduccionRecursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    tipoRecursoId?: boolean
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    tipoRecurso?: boolean | TipoRecursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produccionRecurso"]>

  export type ProduccionRecursoSelectScalar = {
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    tipoRecursoId?: boolean
  }

  export type ProduccionRecursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    tipoRecurso?: boolean | TipoRecursoDefaultArgs<ExtArgs>
  }
  export type ProduccionRecursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    tipoRecurso?: boolean | TipoRecursoDefaultArgs<ExtArgs>
  }

  export type $ProduccionRecursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProduccionRecurso"
    objects: {
      fluido: Prisma.$FluidoPayload<ExtArgs>
      tipoRecurso: Prisma.$TipoRecursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      mes: number | null
      anio: number
      observaciones: string | null
      fluidoId: number
      tipoRecursoId: number
    }, ExtArgs["result"]["produccionRecurso"]>
    composites: {}
  }

  type ProduccionRecursoGetPayload<S extends boolean | null | undefined | ProduccionRecursoDefaultArgs> = $Result.GetResult<Prisma.$ProduccionRecursoPayload, S>

  type ProduccionRecursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProduccionRecursoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProduccionRecursoCountAggregateInputType | true
    }

  export interface ProduccionRecursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProduccionRecurso'], meta: { name: 'ProduccionRecurso' } }
    /**
     * Find zero or one ProduccionRecurso that matches the filter.
     * @param {ProduccionRecursoFindUniqueArgs} args - Arguments to find a ProduccionRecurso
     * @example
     * // Get one ProduccionRecurso
     * const produccionRecurso = await prisma.produccionRecurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduccionRecursoFindUniqueArgs>(args: SelectSubset<T, ProduccionRecursoFindUniqueArgs<ExtArgs>>): Prisma__ProduccionRecursoClient<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProduccionRecurso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProduccionRecursoFindUniqueOrThrowArgs} args - Arguments to find a ProduccionRecurso
     * @example
     * // Get one ProduccionRecurso
     * const produccionRecurso = await prisma.produccionRecurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduccionRecursoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduccionRecursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduccionRecursoClient<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProduccionRecurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionRecursoFindFirstArgs} args - Arguments to find a ProduccionRecurso
     * @example
     * // Get one ProduccionRecurso
     * const produccionRecurso = await prisma.produccionRecurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduccionRecursoFindFirstArgs>(args?: SelectSubset<T, ProduccionRecursoFindFirstArgs<ExtArgs>>): Prisma__ProduccionRecursoClient<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProduccionRecurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionRecursoFindFirstOrThrowArgs} args - Arguments to find a ProduccionRecurso
     * @example
     * // Get one ProduccionRecurso
     * const produccionRecurso = await prisma.produccionRecurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduccionRecursoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduccionRecursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduccionRecursoClient<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProduccionRecursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionRecursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProduccionRecursos
     * const produccionRecursos = await prisma.produccionRecurso.findMany()
     * 
     * // Get first 10 ProduccionRecursos
     * const produccionRecursos = await prisma.produccionRecurso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produccionRecursoWithIdOnly = await prisma.produccionRecurso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduccionRecursoFindManyArgs>(args?: SelectSubset<T, ProduccionRecursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProduccionRecurso.
     * @param {ProduccionRecursoCreateArgs} args - Arguments to create a ProduccionRecurso.
     * @example
     * // Create one ProduccionRecurso
     * const ProduccionRecurso = await prisma.produccionRecurso.create({
     *   data: {
     *     // ... data to create a ProduccionRecurso
     *   }
     * })
     * 
     */
    create<T extends ProduccionRecursoCreateArgs>(args: SelectSubset<T, ProduccionRecursoCreateArgs<ExtArgs>>): Prisma__ProduccionRecursoClient<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProduccionRecursos.
     * @param {ProduccionRecursoCreateManyArgs} args - Arguments to create many ProduccionRecursos.
     * @example
     * // Create many ProduccionRecursos
     * const produccionRecurso = await prisma.produccionRecurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduccionRecursoCreateManyArgs>(args?: SelectSubset<T, ProduccionRecursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProduccionRecursos and returns the data saved in the database.
     * @param {ProduccionRecursoCreateManyAndReturnArgs} args - Arguments to create many ProduccionRecursos.
     * @example
     * // Create many ProduccionRecursos
     * const produccionRecurso = await prisma.produccionRecurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProduccionRecursos and only return the `id`
     * const produccionRecursoWithIdOnly = await prisma.produccionRecurso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduccionRecursoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduccionRecursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProduccionRecurso.
     * @param {ProduccionRecursoDeleteArgs} args - Arguments to delete one ProduccionRecurso.
     * @example
     * // Delete one ProduccionRecurso
     * const ProduccionRecurso = await prisma.produccionRecurso.delete({
     *   where: {
     *     // ... filter to delete one ProduccionRecurso
     *   }
     * })
     * 
     */
    delete<T extends ProduccionRecursoDeleteArgs>(args: SelectSubset<T, ProduccionRecursoDeleteArgs<ExtArgs>>): Prisma__ProduccionRecursoClient<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProduccionRecurso.
     * @param {ProduccionRecursoUpdateArgs} args - Arguments to update one ProduccionRecurso.
     * @example
     * // Update one ProduccionRecurso
     * const produccionRecurso = await prisma.produccionRecurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduccionRecursoUpdateArgs>(args: SelectSubset<T, ProduccionRecursoUpdateArgs<ExtArgs>>): Prisma__ProduccionRecursoClient<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProduccionRecursos.
     * @param {ProduccionRecursoDeleteManyArgs} args - Arguments to filter ProduccionRecursos to delete.
     * @example
     * // Delete a few ProduccionRecursos
     * const { count } = await prisma.produccionRecurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduccionRecursoDeleteManyArgs>(args?: SelectSubset<T, ProduccionRecursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProduccionRecursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionRecursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProduccionRecursos
     * const produccionRecurso = await prisma.produccionRecurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduccionRecursoUpdateManyArgs>(args: SelectSubset<T, ProduccionRecursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProduccionRecurso.
     * @param {ProduccionRecursoUpsertArgs} args - Arguments to update or create a ProduccionRecurso.
     * @example
     * // Update or create a ProduccionRecurso
     * const produccionRecurso = await prisma.produccionRecurso.upsert({
     *   create: {
     *     // ... data to create a ProduccionRecurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProduccionRecurso we want to update
     *   }
     * })
     */
    upsert<T extends ProduccionRecursoUpsertArgs>(args: SelectSubset<T, ProduccionRecursoUpsertArgs<ExtArgs>>): Prisma__ProduccionRecursoClient<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProduccionRecursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionRecursoCountArgs} args - Arguments to filter ProduccionRecursos to count.
     * @example
     * // Count the number of ProduccionRecursos
     * const count = await prisma.produccionRecurso.count({
     *   where: {
     *     // ... the filter for the ProduccionRecursos we want to count
     *   }
     * })
    **/
    count<T extends ProduccionRecursoCountArgs>(
      args?: Subset<T, ProduccionRecursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduccionRecursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProduccionRecurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionRecursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProduccionRecursoAggregateArgs>(args: Subset<T, ProduccionRecursoAggregateArgs>): Prisma.PrismaPromise<GetProduccionRecursoAggregateType<T>>

    /**
     * Group by ProduccionRecurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionRecursoGroupByArgs} args - Group by arguments.
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
      T extends ProduccionRecursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduccionRecursoGroupByArgs['orderBy'] }
        : { orderBy?: ProduccionRecursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProduccionRecursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduccionRecursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProduccionRecurso model
   */
  readonly fields: ProduccionRecursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProduccionRecurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduccionRecursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fluido<T extends FluidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FluidoDefaultArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tipoRecurso<T extends TipoRecursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoRecursoDefaultArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProduccionRecurso model
   */ 
  interface ProduccionRecursoFieldRefs {
    readonly id: FieldRef<"ProduccionRecurso", 'Int'>
    readonly cantidad: FieldRef<"ProduccionRecurso", 'Int'>
    readonly mes: FieldRef<"ProduccionRecurso", 'Int'>
    readonly anio: FieldRef<"ProduccionRecurso", 'Int'>
    readonly observaciones: FieldRef<"ProduccionRecurso", 'String'>
    readonly fluidoId: FieldRef<"ProduccionRecurso", 'Int'>
    readonly tipoRecursoId: FieldRef<"ProduccionRecurso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProduccionRecurso findUnique
   */
  export type ProduccionRecursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionRecurso to fetch.
     */
    where: ProduccionRecursoWhereUniqueInput
  }

  /**
   * ProduccionRecurso findUniqueOrThrow
   */
  export type ProduccionRecursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionRecurso to fetch.
     */
    where: ProduccionRecursoWhereUniqueInput
  }

  /**
   * ProduccionRecurso findFirst
   */
  export type ProduccionRecursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionRecurso to fetch.
     */
    where?: ProduccionRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionRecursos to fetch.
     */
    orderBy?: ProduccionRecursoOrderByWithRelationInput | ProduccionRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProduccionRecursos.
     */
    cursor?: ProduccionRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProduccionRecursos.
     */
    distinct?: ProduccionRecursoScalarFieldEnum | ProduccionRecursoScalarFieldEnum[]
  }

  /**
   * ProduccionRecurso findFirstOrThrow
   */
  export type ProduccionRecursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionRecurso to fetch.
     */
    where?: ProduccionRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionRecursos to fetch.
     */
    orderBy?: ProduccionRecursoOrderByWithRelationInput | ProduccionRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProduccionRecursos.
     */
    cursor?: ProduccionRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProduccionRecursos.
     */
    distinct?: ProduccionRecursoScalarFieldEnum | ProduccionRecursoScalarFieldEnum[]
  }

  /**
   * ProduccionRecurso findMany
   */
  export type ProduccionRecursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionRecursos to fetch.
     */
    where?: ProduccionRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionRecursos to fetch.
     */
    orderBy?: ProduccionRecursoOrderByWithRelationInput | ProduccionRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProduccionRecursos.
     */
    cursor?: ProduccionRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionRecursos.
     */
    skip?: number
    distinct?: ProduccionRecursoScalarFieldEnum | ProduccionRecursoScalarFieldEnum[]
  }

  /**
   * ProduccionRecurso create
   */
  export type ProduccionRecursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProduccionRecurso.
     */
    data: XOR<ProduccionRecursoCreateInput, ProduccionRecursoUncheckedCreateInput>
  }

  /**
   * ProduccionRecurso createMany
   */
  export type ProduccionRecursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProduccionRecursos.
     */
    data: ProduccionRecursoCreateManyInput | ProduccionRecursoCreateManyInput[]
  }

  /**
   * ProduccionRecurso createManyAndReturn
   */
  export type ProduccionRecursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProduccionRecursos.
     */
    data: ProduccionRecursoCreateManyInput | ProduccionRecursoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProduccionRecurso update
   */
  export type ProduccionRecursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProduccionRecurso.
     */
    data: XOR<ProduccionRecursoUpdateInput, ProduccionRecursoUncheckedUpdateInput>
    /**
     * Choose, which ProduccionRecurso to update.
     */
    where: ProduccionRecursoWhereUniqueInput
  }

  /**
   * ProduccionRecurso updateMany
   */
  export type ProduccionRecursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProduccionRecursos.
     */
    data: XOR<ProduccionRecursoUpdateManyMutationInput, ProduccionRecursoUncheckedUpdateManyInput>
    /**
     * Filter which ProduccionRecursos to update
     */
    where?: ProduccionRecursoWhereInput
  }

  /**
   * ProduccionRecurso upsert
   */
  export type ProduccionRecursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProduccionRecurso to update in case it exists.
     */
    where: ProduccionRecursoWhereUniqueInput
    /**
     * In case the ProduccionRecurso found by the `where` argument doesn't exist, create a new ProduccionRecurso with this data.
     */
    create: XOR<ProduccionRecursoCreateInput, ProduccionRecursoUncheckedCreateInput>
    /**
     * In case the ProduccionRecurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduccionRecursoUpdateInput, ProduccionRecursoUncheckedUpdateInput>
  }

  /**
   * ProduccionRecurso delete
   */
  export type ProduccionRecursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    /**
     * Filter which ProduccionRecurso to delete.
     */
    where: ProduccionRecursoWhereUniqueInput
  }

  /**
   * ProduccionRecurso deleteMany
   */
  export type ProduccionRecursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProduccionRecursos to delete
     */
    where?: ProduccionRecursoWhereInput
  }

  /**
   * ProduccionRecurso without action
   */
  export type ProduccionRecursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
  }


  /**
   * Model ProduccionArea
   */

  export type AggregateProduccionArea = {
    _count: ProduccionAreaCountAggregateOutputType | null
    _avg: ProduccionAreaAvgAggregateOutputType | null
    _sum: ProduccionAreaSumAggregateOutputType | null
    _min: ProduccionAreaMinAggregateOutputType | null
    _max: ProduccionAreaMaxAggregateOutputType | null
  }

  export type ProduccionAreaAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    fluidoId: number | null
    areaId: number | null
  }

  export type ProduccionAreaSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    fluidoId: number | null
    areaId: number | null
  }

  export type ProduccionAreaMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    fluidoId: number | null
    areaId: number | null
  }

  export type ProduccionAreaMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    mes: number | null
    anio: number | null
    observaciones: string | null
    fluidoId: number | null
    areaId: number | null
  }

  export type ProduccionAreaCountAggregateOutputType = {
    id: number
    cantidad: number
    mes: number
    anio: number
    observaciones: number
    fluidoId: number
    areaId: number
    _all: number
  }


  export type ProduccionAreaAvgAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    fluidoId?: true
    areaId?: true
  }

  export type ProduccionAreaSumAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    fluidoId?: true
    areaId?: true
  }

  export type ProduccionAreaMinAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    areaId?: true
  }

  export type ProduccionAreaMaxAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    areaId?: true
  }

  export type ProduccionAreaCountAggregateInputType = {
    id?: true
    cantidad?: true
    mes?: true
    anio?: true
    observaciones?: true
    fluidoId?: true
    areaId?: true
    _all?: true
  }

  export type ProduccionAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProduccionArea to aggregate.
     */
    where?: ProduccionAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionAreas to fetch.
     */
    orderBy?: ProduccionAreaOrderByWithRelationInput | ProduccionAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduccionAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProduccionAreas
    **/
    _count?: true | ProduccionAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduccionAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduccionAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduccionAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduccionAreaMaxAggregateInputType
  }

  export type GetProduccionAreaAggregateType<T extends ProduccionAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateProduccionArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduccionArea[P]>
      : GetScalarType<T[P], AggregateProduccionArea[P]>
  }




  export type ProduccionAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduccionAreaWhereInput
    orderBy?: ProduccionAreaOrderByWithAggregationInput | ProduccionAreaOrderByWithAggregationInput[]
    by: ProduccionAreaScalarFieldEnum[] | ProduccionAreaScalarFieldEnum
    having?: ProduccionAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduccionAreaCountAggregateInputType | true
    _avg?: ProduccionAreaAvgAggregateInputType
    _sum?: ProduccionAreaSumAggregateInputType
    _min?: ProduccionAreaMinAggregateInputType
    _max?: ProduccionAreaMaxAggregateInputType
  }

  export type ProduccionAreaGroupByOutputType = {
    id: number
    cantidad: number
    mes: number | null
    anio: number
    observaciones: string | null
    fluidoId: number
    areaId: number
    _count: ProduccionAreaCountAggregateOutputType | null
    _avg: ProduccionAreaAvgAggregateOutputType | null
    _sum: ProduccionAreaSumAggregateOutputType | null
    _min: ProduccionAreaMinAggregateOutputType | null
    _max: ProduccionAreaMaxAggregateOutputType | null
  }

  type GetProduccionAreaGroupByPayload<T extends ProduccionAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduccionAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduccionAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduccionAreaGroupByOutputType[P]>
            : GetScalarType<T[P], ProduccionAreaGroupByOutputType[P]>
        }
      >
    >


  export type ProduccionAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    areaId?: boolean
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produccionArea"]>

  export type ProduccionAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    areaId?: boolean
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produccionArea"]>

  export type ProduccionAreaSelectScalar = {
    id?: boolean
    cantidad?: boolean
    mes?: boolean
    anio?: boolean
    observaciones?: boolean
    fluidoId?: boolean
    areaId?: boolean
  }

  export type ProduccionAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type ProduccionAreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fluido?: boolean | FluidoDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }

  export type $ProduccionAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProduccionArea"
    objects: {
      fluido: Prisma.$FluidoPayload<ExtArgs>
      area: Prisma.$AreaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      mes: number | null
      anio: number
      observaciones: string | null
      fluidoId: number
      areaId: number
    }, ExtArgs["result"]["produccionArea"]>
    composites: {}
  }

  type ProduccionAreaGetPayload<S extends boolean | null | undefined | ProduccionAreaDefaultArgs> = $Result.GetResult<Prisma.$ProduccionAreaPayload, S>

  type ProduccionAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProduccionAreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProduccionAreaCountAggregateInputType | true
    }

  export interface ProduccionAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProduccionArea'], meta: { name: 'ProduccionArea' } }
    /**
     * Find zero or one ProduccionArea that matches the filter.
     * @param {ProduccionAreaFindUniqueArgs} args - Arguments to find a ProduccionArea
     * @example
     * // Get one ProduccionArea
     * const produccionArea = await prisma.produccionArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduccionAreaFindUniqueArgs>(args: SelectSubset<T, ProduccionAreaFindUniqueArgs<ExtArgs>>): Prisma__ProduccionAreaClient<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProduccionArea that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProduccionAreaFindUniqueOrThrowArgs} args - Arguments to find a ProduccionArea
     * @example
     * // Get one ProduccionArea
     * const produccionArea = await prisma.produccionArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduccionAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduccionAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduccionAreaClient<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProduccionArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionAreaFindFirstArgs} args - Arguments to find a ProduccionArea
     * @example
     * // Get one ProduccionArea
     * const produccionArea = await prisma.produccionArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduccionAreaFindFirstArgs>(args?: SelectSubset<T, ProduccionAreaFindFirstArgs<ExtArgs>>): Prisma__ProduccionAreaClient<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProduccionArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionAreaFindFirstOrThrowArgs} args - Arguments to find a ProduccionArea
     * @example
     * // Get one ProduccionArea
     * const produccionArea = await prisma.produccionArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduccionAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduccionAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduccionAreaClient<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProduccionAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProduccionAreas
     * const produccionAreas = await prisma.produccionArea.findMany()
     * 
     * // Get first 10 ProduccionAreas
     * const produccionAreas = await prisma.produccionArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produccionAreaWithIdOnly = await prisma.produccionArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduccionAreaFindManyArgs>(args?: SelectSubset<T, ProduccionAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProduccionArea.
     * @param {ProduccionAreaCreateArgs} args - Arguments to create a ProduccionArea.
     * @example
     * // Create one ProduccionArea
     * const ProduccionArea = await prisma.produccionArea.create({
     *   data: {
     *     // ... data to create a ProduccionArea
     *   }
     * })
     * 
     */
    create<T extends ProduccionAreaCreateArgs>(args: SelectSubset<T, ProduccionAreaCreateArgs<ExtArgs>>): Prisma__ProduccionAreaClient<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProduccionAreas.
     * @param {ProduccionAreaCreateManyArgs} args - Arguments to create many ProduccionAreas.
     * @example
     * // Create many ProduccionAreas
     * const produccionArea = await prisma.produccionArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduccionAreaCreateManyArgs>(args?: SelectSubset<T, ProduccionAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProduccionAreas and returns the data saved in the database.
     * @param {ProduccionAreaCreateManyAndReturnArgs} args - Arguments to create many ProduccionAreas.
     * @example
     * // Create many ProduccionAreas
     * const produccionArea = await prisma.produccionArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProduccionAreas and only return the `id`
     * const produccionAreaWithIdOnly = await prisma.produccionArea.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduccionAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduccionAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProduccionArea.
     * @param {ProduccionAreaDeleteArgs} args - Arguments to delete one ProduccionArea.
     * @example
     * // Delete one ProduccionArea
     * const ProduccionArea = await prisma.produccionArea.delete({
     *   where: {
     *     // ... filter to delete one ProduccionArea
     *   }
     * })
     * 
     */
    delete<T extends ProduccionAreaDeleteArgs>(args: SelectSubset<T, ProduccionAreaDeleteArgs<ExtArgs>>): Prisma__ProduccionAreaClient<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProduccionArea.
     * @param {ProduccionAreaUpdateArgs} args - Arguments to update one ProduccionArea.
     * @example
     * // Update one ProduccionArea
     * const produccionArea = await prisma.produccionArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduccionAreaUpdateArgs>(args: SelectSubset<T, ProduccionAreaUpdateArgs<ExtArgs>>): Prisma__ProduccionAreaClient<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProduccionAreas.
     * @param {ProduccionAreaDeleteManyArgs} args - Arguments to filter ProduccionAreas to delete.
     * @example
     * // Delete a few ProduccionAreas
     * const { count } = await prisma.produccionArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduccionAreaDeleteManyArgs>(args?: SelectSubset<T, ProduccionAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProduccionAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProduccionAreas
     * const produccionArea = await prisma.produccionArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduccionAreaUpdateManyArgs>(args: SelectSubset<T, ProduccionAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProduccionArea.
     * @param {ProduccionAreaUpsertArgs} args - Arguments to update or create a ProduccionArea.
     * @example
     * // Update or create a ProduccionArea
     * const produccionArea = await prisma.produccionArea.upsert({
     *   create: {
     *     // ... data to create a ProduccionArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProduccionArea we want to update
     *   }
     * })
     */
    upsert<T extends ProduccionAreaUpsertArgs>(args: SelectSubset<T, ProduccionAreaUpsertArgs<ExtArgs>>): Prisma__ProduccionAreaClient<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProduccionAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionAreaCountArgs} args - Arguments to filter ProduccionAreas to count.
     * @example
     * // Count the number of ProduccionAreas
     * const count = await prisma.produccionArea.count({
     *   where: {
     *     // ... the filter for the ProduccionAreas we want to count
     *   }
     * })
    **/
    count<T extends ProduccionAreaCountArgs>(
      args?: Subset<T, ProduccionAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduccionAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProduccionArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProduccionAreaAggregateArgs>(args: Subset<T, ProduccionAreaAggregateArgs>): Prisma.PrismaPromise<GetProduccionAreaAggregateType<T>>

    /**
     * Group by ProduccionArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduccionAreaGroupByArgs} args - Group by arguments.
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
      T extends ProduccionAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduccionAreaGroupByArgs['orderBy'] }
        : { orderBy?: ProduccionAreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProduccionAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduccionAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProduccionArea model
   */
  readonly fields: ProduccionAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProduccionArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduccionAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fluido<T extends FluidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FluidoDefaultArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProduccionArea model
   */ 
  interface ProduccionAreaFieldRefs {
    readonly id: FieldRef<"ProduccionArea", 'Int'>
    readonly cantidad: FieldRef<"ProduccionArea", 'Int'>
    readonly mes: FieldRef<"ProduccionArea", 'Int'>
    readonly anio: FieldRef<"ProduccionArea", 'Int'>
    readonly observaciones: FieldRef<"ProduccionArea", 'String'>
    readonly fluidoId: FieldRef<"ProduccionArea", 'Int'>
    readonly areaId: FieldRef<"ProduccionArea", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProduccionArea findUnique
   */
  export type ProduccionAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionArea to fetch.
     */
    where: ProduccionAreaWhereUniqueInput
  }

  /**
   * ProduccionArea findUniqueOrThrow
   */
  export type ProduccionAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionArea to fetch.
     */
    where: ProduccionAreaWhereUniqueInput
  }

  /**
   * ProduccionArea findFirst
   */
  export type ProduccionAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionArea to fetch.
     */
    where?: ProduccionAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionAreas to fetch.
     */
    orderBy?: ProduccionAreaOrderByWithRelationInput | ProduccionAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProduccionAreas.
     */
    cursor?: ProduccionAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProduccionAreas.
     */
    distinct?: ProduccionAreaScalarFieldEnum | ProduccionAreaScalarFieldEnum[]
  }

  /**
   * ProduccionArea findFirstOrThrow
   */
  export type ProduccionAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionArea to fetch.
     */
    where?: ProduccionAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionAreas to fetch.
     */
    orderBy?: ProduccionAreaOrderByWithRelationInput | ProduccionAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProduccionAreas.
     */
    cursor?: ProduccionAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProduccionAreas.
     */
    distinct?: ProduccionAreaScalarFieldEnum | ProduccionAreaScalarFieldEnum[]
  }

  /**
   * ProduccionArea findMany
   */
  export type ProduccionAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * Filter, which ProduccionAreas to fetch.
     */
    where?: ProduccionAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProduccionAreas to fetch.
     */
    orderBy?: ProduccionAreaOrderByWithRelationInput | ProduccionAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProduccionAreas.
     */
    cursor?: ProduccionAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProduccionAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProduccionAreas.
     */
    skip?: number
    distinct?: ProduccionAreaScalarFieldEnum | ProduccionAreaScalarFieldEnum[]
  }

  /**
   * ProduccionArea create
   */
  export type ProduccionAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProduccionArea.
     */
    data: XOR<ProduccionAreaCreateInput, ProduccionAreaUncheckedCreateInput>
  }

  /**
   * ProduccionArea createMany
   */
  export type ProduccionAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProduccionAreas.
     */
    data: ProduccionAreaCreateManyInput | ProduccionAreaCreateManyInput[]
  }

  /**
   * ProduccionArea createManyAndReturn
   */
  export type ProduccionAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProduccionAreas.
     */
    data: ProduccionAreaCreateManyInput | ProduccionAreaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProduccionArea update
   */
  export type ProduccionAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProduccionArea.
     */
    data: XOR<ProduccionAreaUpdateInput, ProduccionAreaUncheckedUpdateInput>
    /**
     * Choose, which ProduccionArea to update.
     */
    where: ProduccionAreaWhereUniqueInput
  }

  /**
   * ProduccionArea updateMany
   */
  export type ProduccionAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProduccionAreas.
     */
    data: XOR<ProduccionAreaUpdateManyMutationInput, ProduccionAreaUncheckedUpdateManyInput>
    /**
     * Filter which ProduccionAreas to update
     */
    where?: ProduccionAreaWhereInput
  }

  /**
   * ProduccionArea upsert
   */
  export type ProduccionAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProduccionArea to update in case it exists.
     */
    where: ProduccionAreaWhereUniqueInput
    /**
     * In case the ProduccionArea found by the `where` argument doesn't exist, create a new ProduccionArea with this data.
     */
    create: XOR<ProduccionAreaCreateInput, ProduccionAreaUncheckedCreateInput>
    /**
     * In case the ProduccionArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduccionAreaUpdateInput, ProduccionAreaUncheckedUpdateInput>
  }

  /**
   * ProduccionArea delete
   */
  export type ProduccionAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    /**
     * Filter which ProduccionArea to delete.
     */
    where: ProduccionAreaWhereUniqueInput
  }

  /**
   * ProduccionArea deleteMany
   */
  export type ProduccionAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProduccionAreas to delete
     */
    where?: ProduccionAreaWhereInput
  }

  /**
   * ProduccionArea without action
   */
  export type ProduccionAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
  }


  /**
   * Model TipoRecurso
   */

  export type AggregateTipoRecurso = {
    _count: TipoRecursoCountAggregateOutputType | null
    _avg: TipoRecursoAvgAggregateOutputType | null
    _sum: TipoRecursoSumAggregateOutputType | null
    _min: TipoRecursoMinAggregateOutputType | null
    _max: TipoRecursoMaxAggregateOutputType | null
  }

  export type TipoRecursoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoRecursoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoRecursoMinAggregateOutputType = {
    id: number | null
    tipoRecurso: string | null
    subTipoRecurso: string | null
    comentario: string | null
  }

  export type TipoRecursoMaxAggregateOutputType = {
    id: number | null
    tipoRecurso: string | null
    subTipoRecurso: string | null
    comentario: string | null
  }

  export type TipoRecursoCountAggregateOutputType = {
    id: number
    tipoRecurso: number
    subTipoRecurso: number
    comentario: number
    _all: number
  }


  export type TipoRecursoAvgAggregateInputType = {
    id?: true
  }

  export type TipoRecursoSumAggregateInputType = {
    id?: true
  }

  export type TipoRecursoMinAggregateInputType = {
    id?: true
    tipoRecurso?: true
    subTipoRecurso?: true
    comentario?: true
  }

  export type TipoRecursoMaxAggregateInputType = {
    id?: true
    tipoRecurso?: true
    subTipoRecurso?: true
    comentario?: true
  }

  export type TipoRecursoCountAggregateInputType = {
    id?: true
    tipoRecurso?: true
    subTipoRecurso?: true
    comentario?: true
    _all?: true
  }

  export type TipoRecursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoRecurso to aggregate.
     */
    where?: TipoRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRecursos to fetch.
     */
    orderBy?: TipoRecursoOrderByWithRelationInput | TipoRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoRecursos
    **/
    _count?: true | TipoRecursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoRecursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoRecursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoRecursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoRecursoMaxAggregateInputType
  }

  export type GetTipoRecursoAggregateType<T extends TipoRecursoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoRecurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoRecurso[P]>
      : GetScalarType<T[P], AggregateTipoRecurso[P]>
  }




  export type TipoRecursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoRecursoWhereInput
    orderBy?: TipoRecursoOrderByWithAggregationInput | TipoRecursoOrderByWithAggregationInput[]
    by: TipoRecursoScalarFieldEnum[] | TipoRecursoScalarFieldEnum
    having?: TipoRecursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoRecursoCountAggregateInputType | true
    _avg?: TipoRecursoAvgAggregateInputType
    _sum?: TipoRecursoSumAggregateInputType
    _min?: TipoRecursoMinAggregateInputType
    _max?: TipoRecursoMaxAggregateInputType
  }

  export type TipoRecursoGroupByOutputType = {
    id: number
    tipoRecurso: string
    subTipoRecurso: string | null
    comentario: string | null
    _count: TipoRecursoCountAggregateOutputType | null
    _avg: TipoRecursoAvgAggregateOutputType | null
    _sum: TipoRecursoSumAggregateOutputType | null
    _min: TipoRecursoMinAggregateOutputType | null
    _max: TipoRecursoMaxAggregateOutputType | null
  }

  type GetTipoRecursoGroupByPayload<T extends TipoRecursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoRecursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoRecursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoRecursoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoRecursoGroupByOutputType[P]>
        }
      >
    >


  export type TipoRecursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoRecurso?: boolean
    subTipoRecurso?: boolean
    comentario?: boolean
    produccion?: boolean | TipoRecurso$produccionArgs<ExtArgs>
    pozos?: boolean | TipoRecurso$pozosArgs<ExtArgs>
    _count?: boolean | TipoRecursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoRecurso"]>

  export type TipoRecursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoRecurso?: boolean
    subTipoRecurso?: boolean
    comentario?: boolean
  }, ExtArgs["result"]["tipoRecurso"]>

  export type TipoRecursoSelectScalar = {
    id?: boolean
    tipoRecurso?: boolean
    subTipoRecurso?: boolean
    comentario?: boolean
  }

  export type TipoRecursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produccion?: boolean | TipoRecurso$produccionArgs<ExtArgs>
    pozos?: boolean | TipoRecurso$pozosArgs<ExtArgs>
    _count?: boolean | TipoRecursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoRecursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoRecursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoRecurso"
    objects: {
      produccion: Prisma.$ProduccionRecursoPayload<ExtArgs>[]
      pozos: Prisma.$PozoRecursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipoRecurso: string
      subTipoRecurso: string | null
      comentario: string | null
    }, ExtArgs["result"]["tipoRecurso"]>
    composites: {}
  }

  type TipoRecursoGetPayload<S extends boolean | null | undefined | TipoRecursoDefaultArgs> = $Result.GetResult<Prisma.$TipoRecursoPayload, S>

  type TipoRecursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TipoRecursoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TipoRecursoCountAggregateInputType | true
    }

  export interface TipoRecursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoRecurso'], meta: { name: 'TipoRecurso' } }
    /**
     * Find zero or one TipoRecurso that matches the filter.
     * @param {TipoRecursoFindUniqueArgs} args - Arguments to find a TipoRecurso
     * @example
     * // Get one TipoRecurso
     * const tipoRecurso = await prisma.tipoRecurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoRecursoFindUniqueArgs>(args: SelectSubset<T, TipoRecursoFindUniqueArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TipoRecurso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TipoRecursoFindUniqueOrThrowArgs} args - Arguments to find a TipoRecurso
     * @example
     * // Get one TipoRecurso
     * const tipoRecurso = await prisma.tipoRecurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoRecursoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoRecursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TipoRecurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRecursoFindFirstArgs} args - Arguments to find a TipoRecurso
     * @example
     * // Get one TipoRecurso
     * const tipoRecurso = await prisma.tipoRecurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoRecursoFindFirstArgs>(args?: SelectSubset<T, TipoRecursoFindFirstArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TipoRecurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRecursoFindFirstOrThrowArgs} args - Arguments to find a TipoRecurso
     * @example
     * // Get one TipoRecurso
     * const tipoRecurso = await prisma.tipoRecurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoRecursoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoRecursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TipoRecursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRecursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoRecursos
     * const tipoRecursos = await prisma.tipoRecurso.findMany()
     * 
     * // Get first 10 TipoRecursos
     * const tipoRecursos = await prisma.tipoRecurso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoRecursoWithIdOnly = await prisma.tipoRecurso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoRecursoFindManyArgs>(args?: SelectSubset<T, TipoRecursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TipoRecurso.
     * @param {TipoRecursoCreateArgs} args - Arguments to create a TipoRecurso.
     * @example
     * // Create one TipoRecurso
     * const TipoRecurso = await prisma.tipoRecurso.create({
     *   data: {
     *     // ... data to create a TipoRecurso
     *   }
     * })
     * 
     */
    create<T extends TipoRecursoCreateArgs>(args: SelectSubset<T, TipoRecursoCreateArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TipoRecursos.
     * @param {TipoRecursoCreateManyArgs} args - Arguments to create many TipoRecursos.
     * @example
     * // Create many TipoRecursos
     * const tipoRecurso = await prisma.tipoRecurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoRecursoCreateManyArgs>(args?: SelectSubset<T, TipoRecursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoRecursos and returns the data saved in the database.
     * @param {TipoRecursoCreateManyAndReturnArgs} args - Arguments to create many TipoRecursos.
     * @example
     * // Create many TipoRecursos
     * const tipoRecurso = await prisma.tipoRecurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoRecursos and only return the `id`
     * const tipoRecursoWithIdOnly = await prisma.tipoRecurso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoRecursoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoRecursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TipoRecurso.
     * @param {TipoRecursoDeleteArgs} args - Arguments to delete one TipoRecurso.
     * @example
     * // Delete one TipoRecurso
     * const TipoRecurso = await prisma.tipoRecurso.delete({
     *   where: {
     *     // ... filter to delete one TipoRecurso
     *   }
     * })
     * 
     */
    delete<T extends TipoRecursoDeleteArgs>(args: SelectSubset<T, TipoRecursoDeleteArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TipoRecurso.
     * @param {TipoRecursoUpdateArgs} args - Arguments to update one TipoRecurso.
     * @example
     * // Update one TipoRecurso
     * const tipoRecurso = await prisma.tipoRecurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoRecursoUpdateArgs>(args: SelectSubset<T, TipoRecursoUpdateArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TipoRecursos.
     * @param {TipoRecursoDeleteManyArgs} args - Arguments to filter TipoRecursos to delete.
     * @example
     * // Delete a few TipoRecursos
     * const { count } = await prisma.tipoRecurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoRecursoDeleteManyArgs>(args?: SelectSubset<T, TipoRecursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoRecursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRecursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoRecursos
     * const tipoRecurso = await prisma.tipoRecurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoRecursoUpdateManyArgs>(args: SelectSubset<T, TipoRecursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoRecurso.
     * @param {TipoRecursoUpsertArgs} args - Arguments to update or create a TipoRecurso.
     * @example
     * // Update or create a TipoRecurso
     * const tipoRecurso = await prisma.tipoRecurso.upsert({
     *   create: {
     *     // ... data to create a TipoRecurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoRecurso we want to update
     *   }
     * })
     */
    upsert<T extends TipoRecursoUpsertArgs>(args: SelectSubset<T, TipoRecursoUpsertArgs<ExtArgs>>): Prisma__TipoRecursoClient<$Result.GetResult<Prisma.$TipoRecursoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TipoRecursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRecursoCountArgs} args - Arguments to filter TipoRecursos to count.
     * @example
     * // Count the number of TipoRecursos
     * const count = await prisma.tipoRecurso.count({
     *   where: {
     *     // ... the filter for the TipoRecursos we want to count
     *   }
     * })
    **/
    count<T extends TipoRecursoCountArgs>(
      args?: Subset<T, TipoRecursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoRecursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoRecurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRecursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoRecursoAggregateArgs>(args: Subset<T, TipoRecursoAggregateArgs>): Prisma.PrismaPromise<GetTipoRecursoAggregateType<T>>

    /**
     * Group by TipoRecurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRecursoGroupByArgs} args - Group by arguments.
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
      T extends TipoRecursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoRecursoGroupByArgs['orderBy'] }
        : { orderBy?: TipoRecursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoRecursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoRecursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoRecurso model
   */
  readonly fields: TipoRecursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoRecurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoRecursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produccion<T extends TipoRecurso$produccionArgs<ExtArgs> = {}>(args?: Subset<T, TipoRecurso$produccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "findMany"> | Null>
    pozos<T extends TipoRecurso$pozosArgs<ExtArgs> = {}>(args?: Subset<T, TipoRecurso$pozosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the TipoRecurso model
   */ 
  interface TipoRecursoFieldRefs {
    readonly id: FieldRef<"TipoRecurso", 'Int'>
    readonly tipoRecurso: FieldRef<"TipoRecurso", 'String'>
    readonly subTipoRecurso: FieldRef<"TipoRecurso", 'String'>
    readonly comentario: FieldRef<"TipoRecurso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoRecurso findUnique
   */
  export type TipoRecursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRecurso to fetch.
     */
    where: TipoRecursoWhereUniqueInput
  }

  /**
   * TipoRecurso findUniqueOrThrow
   */
  export type TipoRecursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRecurso to fetch.
     */
    where: TipoRecursoWhereUniqueInput
  }

  /**
   * TipoRecurso findFirst
   */
  export type TipoRecursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRecurso to fetch.
     */
    where?: TipoRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRecursos to fetch.
     */
    orderBy?: TipoRecursoOrderByWithRelationInput | TipoRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoRecursos.
     */
    cursor?: TipoRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRecursos.
     */
    distinct?: TipoRecursoScalarFieldEnum | TipoRecursoScalarFieldEnum[]
  }

  /**
   * TipoRecurso findFirstOrThrow
   */
  export type TipoRecursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRecurso to fetch.
     */
    where?: TipoRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRecursos to fetch.
     */
    orderBy?: TipoRecursoOrderByWithRelationInput | TipoRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoRecursos.
     */
    cursor?: TipoRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRecursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRecursos.
     */
    distinct?: TipoRecursoScalarFieldEnum | TipoRecursoScalarFieldEnum[]
  }

  /**
   * TipoRecurso findMany
   */
  export type TipoRecursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRecursos to fetch.
     */
    where?: TipoRecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRecursos to fetch.
     */
    orderBy?: TipoRecursoOrderByWithRelationInput | TipoRecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoRecursos.
     */
    cursor?: TipoRecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRecursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRecursos.
     */
    skip?: number
    distinct?: TipoRecursoScalarFieldEnum | TipoRecursoScalarFieldEnum[]
  }

  /**
   * TipoRecurso create
   */
  export type TipoRecursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoRecurso.
     */
    data: XOR<TipoRecursoCreateInput, TipoRecursoUncheckedCreateInput>
  }

  /**
   * TipoRecurso createMany
   */
  export type TipoRecursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoRecursos.
     */
    data: TipoRecursoCreateManyInput | TipoRecursoCreateManyInput[]
  }

  /**
   * TipoRecurso createManyAndReturn
   */
  export type TipoRecursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TipoRecursos.
     */
    data: TipoRecursoCreateManyInput | TipoRecursoCreateManyInput[]
  }

  /**
   * TipoRecurso update
   */
  export type TipoRecursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoRecurso.
     */
    data: XOR<TipoRecursoUpdateInput, TipoRecursoUncheckedUpdateInput>
    /**
     * Choose, which TipoRecurso to update.
     */
    where: TipoRecursoWhereUniqueInput
  }

  /**
   * TipoRecurso updateMany
   */
  export type TipoRecursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoRecursos.
     */
    data: XOR<TipoRecursoUpdateManyMutationInput, TipoRecursoUncheckedUpdateManyInput>
    /**
     * Filter which TipoRecursos to update
     */
    where?: TipoRecursoWhereInput
  }

  /**
   * TipoRecurso upsert
   */
  export type TipoRecursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoRecurso to update in case it exists.
     */
    where: TipoRecursoWhereUniqueInput
    /**
     * In case the TipoRecurso found by the `where` argument doesn't exist, create a new TipoRecurso with this data.
     */
    create: XOR<TipoRecursoCreateInput, TipoRecursoUncheckedCreateInput>
    /**
     * In case the TipoRecurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoRecursoUpdateInput, TipoRecursoUncheckedUpdateInput>
  }

  /**
   * TipoRecurso delete
   */
  export type TipoRecursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
    /**
     * Filter which TipoRecurso to delete.
     */
    where: TipoRecursoWhereUniqueInput
  }

  /**
   * TipoRecurso deleteMany
   */
  export type TipoRecursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoRecursos to delete
     */
    where?: TipoRecursoWhereInput
  }

  /**
   * TipoRecurso.produccion
   */
  export type TipoRecurso$produccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    where?: ProduccionRecursoWhereInput
    orderBy?: ProduccionRecursoOrderByWithRelationInput | ProduccionRecursoOrderByWithRelationInput[]
    cursor?: ProduccionRecursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduccionRecursoScalarFieldEnum | ProduccionRecursoScalarFieldEnum[]
  }

  /**
   * TipoRecurso.pozos
   */
  export type TipoRecurso$pozosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    where?: PozoRecursoWhereInput
    orderBy?: PozoRecursoOrderByWithRelationInput | PozoRecursoOrderByWithRelationInput[]
    cursor?: PozoRecursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PozoRecursoScalarFieldEnum | PozoRecursoScalarFieldEnum[]
  }

  /**
   * TipoRecurso without action
   */
  export type TipoRecursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRecurso
     */
    select?: TipoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRecursoInclude<ExtArgs> | null
  }


  /**
   * Model Fluido
   */

  export type AggregateFluido = {
    _count: FluidoCountAggregateOutputType | null
    _avg: FluidoAvgAggregateOutputType | null
    _sum: FluidoSumAggregateOutputType | null
    _min: FluidoMinAggregateOutputType | null
    _max: FluidoMaxAggregateOutputType | null
  }

  export type FluidoAvgAggregateOutputType = {
    id: number | null
  }

  export type FluidoSumAggregateOutputType = {
    id: number | null
  }

  export type FluidoMinAggregateOutputType = {
    id: number | null
    tipoFluido: string | null
    comentario: string | null
  }

  export type FluidoMaxAggregateOutputType = {
    id: number | null
    tipoFluido: string | null
    comentario: string | null
  }

  export type FluidoCountAggregateOutputType = {
    id: number
    tipoFluido: number
    comentario: number
    _all: number
  }


  export type FluidoAvgAggregateInputType = {
    id?: true
  }

  export type FluidoSumAggregateInputType = {
    id?: true
  }

  export type FluidoMinAggregateInputType = {
    id?: true
    tipoFluido?: true
    comentario?: true
  }

  export type FluidoMaxAggregateInputType = {
    id?: true
    tipoFluido?: true
    comentario?: true
  }

  export type FluidoCountAggregateInputType = {
    id?: true
    tipoFluido?: true
    comentario?: true
    _all?: true
  }

  export type FluidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fluido to aggregate.
     */
    where?: FluidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fluidos to fetch.
     */
    orderBy?: FluidoOrderByWithRelationInput | FluidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FluidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fluidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fluidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fluidos
    **/
    _count?: true | FluidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FluidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FluidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FluidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FluidoMaxAggregateInputType
  }

  export type GetFluidoAggregateType<T extends FluidoAggregateArgs> = {
        [P in keyof T & keyof AggregateFluido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFluido[P]>
      : GetScalarType<T[P], AggregateFluido[P]>
  }




  export type FluidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FluidoWhereInput
    orderBy?: FluidoOrderByWithAggregationInput | FluidoOrderByWithAggregationInput[]
    by: FluidoScalarFieldEnum[] | FluidoScalarFieldEnum
    having?: FluidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FluidoCountAggregateInputType | true
    _avg?: FluidoAvgAggregateInputType
    _sum?: FluidoSumAggregateInputType
    _min?: FluidoMinAggregateInputType
    _max?: FluidoMaxAggregateInputType
  }

  export type FluidoGroupByOutputType = {
    id: number
    tipoFluido: string
    comentario: string | null
    _count: FluidoCountAggregateOutputType | null
    _avg: FluidoAvgAggregateOutputType | null
    _sum: FluidoSumAggregateOutputType | null
    _min: FluidoMinAggregateOutputType | null
    _max: FluidoMaxAggregateOutputType | null
  }

  type GetFluidoGroupByPayload<T extends FluidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FluidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FluidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FluidoGroupByOutputType[P]>
            : GetScalarType<T[P], FluidoGroupByOutputType[P]>
        }
      >
    >


  export type FluidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoFluido?: boolean
    comentario?: boolean
    produccionRecurso?: boolean | Fluido$produccionRecursoArgs<ExtArgs>
    produccionArea?: boolean | Fluido$produccionAreaArgs<ExtArgs>
    produccionEmpresa?: boolean | Fluido$produccionEmpresaArgs<ExtArgs>
    pozos?: boolean | Fluido$pozosArgs<ExtArgs>
    _count?: boolean | FluidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fluido"]>

  export type FluidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoFluido?: boolean
    comentario?: boolean
  }, ExtArgs["result"]["fluido"]>

  export type FluidoSelectScalar = {
    id?: boolean
    tipoFluido?: boolean
    comentario?: boolean
  }

  export type FluidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produccionRecurso?: boolean | Fluido$produccionRecursoArgs<ExtArgs>
    produccionArea?: boolean | Fluido$produccionAreaArgs<ExtArgs>
    produccionEmpresa?: boolean | Fluido$produccionEmpresaArgs<ExtArgs>
    pozos?: boolean | Fluido$pozosArgs<ExtArgs>
    _count?: boolean | FluidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FluidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FluidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fluido"
    objects: {
      produccionRecurso: Prisma.$ProduccionRecursoPayload<ExtArgs>[]
      produccionArea: Prisma.$ProduccionAreaPayload<ExtArgs>[]
      produccionEmpresa: Prisma.$ProduccionEmpresaPayload<ExtArgs>[]
      pozos: Prisma.$PozoRecursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipoFluido: string
      comentario: string | null
    }, ExtArgs["result"]["fluido"]>
    composites: {}
  }

  type FluidoGetPayload<S extends boolean | null | undefined | FluidoDefaultArgs> = $Result.GetResult<Prisma.$FluidoPayload, S>

  type FluidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FluidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FluidoCountAggregateInputType | true
    }

  export interface FluidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fluido'], meta: { name: 'Fluido' } }
    /**
     * Find zero or one Fluido that matches the filter.
     * @param {FluidoFindUniqueArgs} args - Arguments to find a Fluido
     * @example
     * // Get one Fluido
     * const fluido = await prisma.fluido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FluidoFindUniqueArgs>(args: SelectSubset<T, FluidoFindUniqueArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fluido that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FluidoFindUniqueOrThrowArgs} args - Arguments to find a Fluido
     * @example
     * // Get one Fluido
     * const fluido = await prisma.fluido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FluidoFindUniqueOrThrowArgs>(args: SelectSubset<T, FluidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fluido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoFindFirstArgs} args - Arguments to find a Fluido
     * @example
     * // Get one Fluido
     * const fluido = await prisma.fluido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FluidoFindFirstArgs>(args?: SelectSubset<T, FluidoFindFirstArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fluido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoFindFirstOrThrowArgs} args - Arguments to find a Fluido
     * @example
     * // Get one Fluido
     * const fluido = await prisma.fluido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FluidoFindFirstOrThrowArgs>(args?: SelectSubset<T, FluidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Fluidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fluidos
     * const fluidos = await prisma.fluido.findMany()
     * 
     * // Get first 10 Fluidos
     * const fluidos = await prisma.fluido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fluidoWithIdOnly = await prisma.fluido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FluidoFindManyArgs>(args?: SelectSubset<T, FluidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fluido.
     * @param {FluidoCreateArgs} args - Arguments to create a Fluido.
     * @example
     * // Create one Fluido
     * const Fluido = await prisma.fluido.create({
     *   data: {
     *     // ... data to create a Fluido
     *   }
     * })
     * 
     */
    create<T extends FluidoCreateArgs>(args: SelectSubset<T, FluidoCreateArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Fluidos.
     * @param {FluidoCreateManyArgs} args - Arguments to create many Fluidos.
     * @example
     * // Create many Fluidos
     * const fluido = await prisma.fluido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FluidoCreateManyArgs>(args?: SelectSubset<T, FluidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fluidos and returns the data saved in the database.
     * @param {FluidoCreateManyAndReturnArgs} args - Arguments to create many Fluidos.
     * @example
     * // Create many Fluidos
     * const fluido = await prisma.fluido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fluidos and only return the `id`
     * const fluidoWithIdOnly = await prisma.fluido.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FluidoCreateManyAndReturnArgs>(args?: SelectSubset<T, FluidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Fluido.
     * @param {FluidoDeleteArgs} args - Arguments to delete one Fluido.
     * @example
     * // Delete one Fluido
     * const Fluido = await prisma.fluido.delete({
     *   where: {
     *     // ... filter to delete one Fluido
     *   }
     * })
     * 
     */
    delete<T extends FluidoDeleteArgs>(args: SelectSubset<T, FluidoDeleteArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fluido.
     * @param {FluidoUpdateArgs} args - Arguments to update one Fluido.
     * @example
     * // Update one Fluido
     * const fluido = await prisma.fluido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FluidoUpdateArgs>(args: SelectSubset<T, FluidoUpdateArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Fluidos.
     * @param {FluidoDeleteManyArgs} args - Arguments to filter Fluidos to delete.
     * @example
     * // Delete a few Fluidos
     * const { count } = await prisma.fluido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FluidoDeleteManyArgs>(args?: SelectSubset<T, FluidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fluidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fluidos
     * const fluido = await prisma.fluido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FluidoUpdateManyArgs>(args: SelectSubset<T, FluidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fluido.
     * @param {FluidoUpsertArgs} args - Arguments to update or create a Fluido.
     * @example
     * // Update or create a Fluido
     * const fluido = await prisma.fluido.upsert({
     *   create: {
     *     // ... data to create a Fluido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fluido we want to update
     *   }
     * })
     */
    upsert<T extends FluidoUpsertArgs>(args: SelectSubset<T, FluidoUpsertArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Fluidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoCountArgs} args - Arguments to filter Fluidos to count.
     * @example
     * // Count the number of Fluidos
     * const count = await prisma.fluido.count({
     *   where: {
     *     // ... the filter for the Fluidos we want to count
     *   }
     * })
    **/
    count<T extends FluidoCountArgs>(
      args?: Subset<T, FluidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FluidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fluido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FluidoAggregateArgs>(args: Subset<T, FluidoAggregateArgs>): Prisma.PrismaPromise<GetFluidoAggregateType<T>>

    /**
     * Group by Fluido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoGroupByArgs} args - Group by arguments.
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
      T extends FluidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FluidoGroupByArgs['orderBy'] }
        : { orderBy?: FluidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FluidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFluidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fluido model
   */
  readonly fields: FluidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fluido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FluidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produccionRecurso<T extends Fluido$produccionRecursoArgs<ExtArgs> = {}>(args?: Subset<T, Fluido$produccionRecursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionRecursoPayload<ExtArgs>, T, "findMany"> | Null>
    produccionArea<T extends Fluido$produccionAreaArgs<ExtArgs> = {}>(args?: Subset<T, Fluido$produccionAreaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionAreaPayload<ExtArgs>, T, "findMany"> | Null>
    produccionEmpresa<T extends Fluido$produccionEmpresaArgs<ExtArgs> = {}>(args?: Subset<T, Fluido$produccionEmpresaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduccionEmpresaPayload<ExtArgs>, T, "findMany"> | Null>
    pozos<T extends Fluido$pozosArgs<ExtArgs> = {}>(args?: Subset<T, Fluido$pozosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PozoRecursoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Fluido model
   */ 
  interface FluidoFieldRefs {
    readonly id: FieldRef<"Fluido", 'Int'>
    readonly tipoFluido: FieldRef<"Fluido", 'String'>
    readonly comentario: FieldRef<"Fluido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fluido findUnique
   */
  export type FluidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * Filter, which Fluido to fetch.
     */
    where: FluidoWhereUniqueInput
  }

  /**
   * Fluido findUniqueOrThrow
   */
  export type FluidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * Filter, which Fluido to fetch.
     */
    where: FluidoWhereUniqueInput
  }

  /**
   * Fluido findFirst
   */
  export type FluidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * Filter, which Fluido to fetch.
     */
    where?: FluidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fluidos to fetch.
     */
    orderBy?: FluidoOrderByWithRelationInput | FluidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fluidos.
     */
    cursor?: FluidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fluidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fluidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fluidos.
     */
    distinct?: FluidoScalarFieldEnum | FluidoScalarFieldEnum[]
  }

  /**
   * Fluido findFirstOrThrow
   */
  export type FluidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * Filter, which Fluido to fetch.
     */
    where?: FluidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fluidos to fetch.
     */
    orderBy?: FluidoOrderByWithRelationInput | FluidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fluidos.
     */
    cursor?: FluidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fluidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fluidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fluidos.
     */
    distinct?: FluidoScalarFieldEnum | FluidoScalarFieldEnum[]
  }

  /**
   * Fluido findMany
   */
  export type FluidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * Filter, which Fluidos to fetch.
     */
    where?: FluidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fluidos to fetch.
     */
    orderBy?: FluidoOrderByWithRelationInput | FluidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fluidos.
     */
    cursor?: FluidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fluidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fluidos.
     */
    skip?: number
    distinct?: FluidoScalarFieldEnum | FluidoScalarFieldEnum[]
  }

  /**
   * Fluido create
   */
  export type FluidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Fluido.
     */
    data: XOR<FluidoCreateInput, FluidoUncheckedCreateInput>
  }

  /**
   * Fluido createMany
   */
  export type FluidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fluidos.
     */
    data: FluidoCreateManyInput | FluidoCreateManyInput[]
  }

  /**
   * Fluido createManyAndReturn
   */
  export type FluidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Fluidos.
     */
    data: FluidoCreateManyInput | FluidoCreateManyInput[]
  }

  /**
   * Fluido update
   */
  export type FluidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Fluido.
     */
    data: XOR<FluidoUpdateInput, FluidoUncheckedUpdateInput>
    /**
     * Choose, which Fluido to update.
     */
    where: FluidoWhereUniqueInput
  }

  /**
   * Fluido updateMany
   */
  export type FluidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fluidos.
     */
    data: XOR<FluidoUpdateManyMutationInput, FluidoUncheckedUpdateManyInput>
    /**
     * Filter which Fluidos to update
     */
    where?: FluidoWhereInput
  }

  /**
   * Fluido upsert
   */
  export type FluidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Fluido to update in case it exists.
     */
    where: FluidoWhereUniqueInput
    /**
     * In case the Fluido found by the `where` argument doesn't exist, create a new Fluido with this data.
     */
    create: XOR<FluidoCreateInput, FluidoUncheckedCreateInput>
    /**
     * In case the Fluido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FluidoUpdateInput, FluidoUncheckedUpdateInput>
  }

  /**
   * Fluido delete
   */
  export type FluidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
    /**
     * Filter which Fluido to delete.
     */
    where: FluidoWhereUniqueInput
  }

  /**
   * Fluido deleteMany
   */
  export type FluidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fluidos to delete
     */
    where?: FluidoWhereInput
  }

  /**
   * Fluido.produccionRecurso
   */
  export type Fluido$produccionRecursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionRecurso
     */
    select?: ProduccionRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionRecursoInclude<ExtArgs> | null
    where?: ProduccionRecursoWhereInput
    orderBy?: ProduccionRecursoOrderByWithRelationInput | ProduccionRecursoOrderByWithRelationInput[]
    cursor?: ProduccionRecursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduccionRecursoScalarFieldEnum | ProduccionRecursoScalarFieldEnum[]
  }

  /**
   * Fluido.produccionArea
   */
  export type Fluido$produccionAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionArea
     */
    select?: ProduccionAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionAreaInclude<ExtArgs> | null
    where?: ProduccionAreaWhereInput
    orderBy?: ProduccionAreaOrderByWithRelationInput | ProduccionAreaOrderByWithRelationInput[]
    cursor?: ProduccionAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduccionAreaScalarFieldEnum | ProduccionAreaScalarFieldEnum[]
  }

  /**
   * Fluido.produccionEmpresa
   */
  export type Fluido$produccionEmpresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduccionEmpresa
     */
    select?: ProduccionEmpresaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduccionEmpresaInclude<ExtArgs> | null
    where?: ProduccionEmpresaWhereInput
    orderBy?: ProduccionEmpresaOrderByWithRelationInput | ProduccionEmpresaOrderByWithRelationInput[]
    cursor?: ProduccionEmpresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduccionEmpresaScalarFieldEnum | ProduccionEmpresaScalarFieldEnum[]
  }

  /**
   * Fluido.pozos
   */
  export type Fluido$pozosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PozoRecurso
     */
    select?: PozoRecursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PozoRecursoInclude<ExtArgs> | null
    where?: PozoRecursoWhereInput
    orderBy?: PozoRecursoOrderByWithRelationInput | PozoRecursoOrderByWithRelationInput[]
    cursor?: PozoRecursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PozoRecursoScalarFieldEnum | PozoRecursoScalarFieldEnum[]
  }

  /**
   * Fluido without action
   */
  export type FluidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FluidoInclude<ExtArgs> | null
  }


  /**
   * Model Noticias
   */

  export type AggregateNoticias = {
    _count: NoticiasCountAggregateOutputType | null
    _avg: NoticiasAvgAggregateOutputType | null
    _sum: NoticiasSumAggregateOutputType | null
    _min: NoticiasMinAggregateOutputType | null
    _max: NoticiasMaxAggregateOutputType | null
  }

  export type NoticiasAvgAggregateOutputType = {
    id: number | null
  }

  export type NoticiasSumAggregateOutputType = {
    id: number | null
  }

  export type NoticiasMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    contenido: string | null
    imagenUrl: string | null
    createdAt: Date | null
  }

  export type NoticiasMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    contenido: string | null
    imagenUrl: string | null
    createdAt: Date | null
  }

  export type NoticiasCountAggregateOutputType = {
    id: number
    titulo: number
    contenido: number
    imagenUrl: number
    createdAt: number
    _all: number
  }


  export type NoticiasAvgAggregateInputType = {
    id?: true
  }

  export type NoticiasSumAggregateInputType = {
    id?: true
  }

  export type NoticiasMinAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    imagenUrl?: true
    createdAt?: true
  }

  export type NoticiasMaxAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    imagenUrl?: true
    createdAt?: true
  }

  export type NoticiasCountAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    imagenUrl?: true
    createdAt?: true
    _all?: true
  }

  export type NoticiasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to aggregate.
     */
    where?: NoticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiasOrderByWithRelationInput | NoticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Noticias
    **/
    _count?: true | NoticiasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiasMaxAggregateInputType
  }

  export type GetNoticiasAggregateType<T extends NoticiasAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticias[P]>
      : GetScalarType<T[P], AggregateNoticias[P]>
  }




  export type NoticiasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiasWhereInput
    orderBy?: NoticiasOrderByWithAggregationInput | NoticiasOrderByWithAggregationInput[]
    by: NoticiasScalarFieldEnum[] | NoticiasScalarFieldEnum
    having?: NoticiasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiasCountAggregateInputType | true
    _avg?: NoticiasAvgAggregateInputType
    _sum?: NoticiasSumAggregateInputType
    _min?: NoticiasMinAggregateInputType
    _max?: NoticiasMaxAggregateInputType
  }

  export type NoticiasGroupByOutputType = {
    id: number
    titulo: string
    contenido: string
    imagenUrl: string | null
    createdAt: Date
    _count: NoticiasCountAggregateOutputType | null
    _avg: NoticiasAvgAggregateOutputType | null
    _sum: NoticiasSumAggregateOutputType | null
    _min: NoticiasMinAggregateOutputType | null
    _max: NoticiasMaxAggregateOutputType | null
  }

  type GetNoticiasGroupByPayload<T extends NoticiasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiasGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiasGroupByOutputType[P]>
        }
      >
    >


  export type NoticiasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    imagenUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["noticias"]>

  export type NoticiasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    imagenUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["noticias"]>

  export type NoticiasSelectScalar = {
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    imagenUrl?: boolean
    createdAt?: boolean
  }


  export type $NoticiasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Noticias"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      contenido: string
      imagenUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["noticias"]>
    composites: {}
  }

  type NoticiasGetPayload<S extends boolean | null | undefined | NoticiasDefaultArgs> = $Result.GetResult<Prisma.$NoticiasPayload, S>

  type NoticiasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoticiasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoticiasCountAggregateInputType | true
    }

  export interface NoticiasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Noticias'], meta: { name: 'Noticias' } }
    /**
     * Find zero or one Noticias that matches the filter.
     * @param {NoticiasFindUniqueArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticiasFindUniqueArgs>(args: SelectSubset<T, NoticiasFindUniqueArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Noticias that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoticiasFindUniqueOrThrowArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticiasFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticiasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasFindFirstArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticiasFindFirstArgs>(args?: SelectSubset<T, NoticiasFindFirstArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Noticias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasFindFirstOrThrowArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticiasFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticiasFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noticias
     * const noticias = await prisma.noticias.findMany()
     * 
     * // Get first 10 Noticias
     * const noticias = await prisma.noticias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticiasWithIdOnly = await prisma.noticias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticiasFindManyArgs>(args?: SelectSubset<T, NoticiasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Noticias.
     * @param {NoticiasCreateArgs} args - Arguments to create a Noticias.
     * @example
     * // Create one Noticias
     * const Noticias = await prisma.noticias.create({
     *   data: {
     *     // ... data to create a Noticias
     *   }
     * })
     * 
     */
    create<T extends NoticiasCreateArgs>(args: SelectSubset<T, NoticiasCreateArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Noticias.
     * @param {NoticiasCreateManyArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticias = await prisma.noticias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticiasCreateManyArgs>(args?: SelectSubset<T, NoticiasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noticias and returns the data saved in the database.
     * @param {NoticiasCreateManyAndReturnArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticias = await prisma.noticias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noticias and only return the `id`
     * const noticiasWithIdOnly = await prisma.noticias.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticiasCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticiasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Noticias.
     * @param {NoticiasDeleteArgs} args - Arguments to delete one Noticias.
     * @example
     * // Delete one Noticias
     * const Noticias = await prisma.noticias.delete({
     *   where: {
     *     // ... filter to delete one Noticias
     *   }
     * })
     * 
     */
    delete<T extends NoticiasDeleteArgs>(args: SelectSubset<T, NoticiasDeleteArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Noticias.
     * @param {NoticiasUpdateArgs} args - Arguments to update one Noticias.
     * @example
     * // Update one Noticias
     * const noticias = await prisma.noticias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticiasUpdateArgs>(args: SelectSubset<T, NoticiasUpdateArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Noticias.
     * @param {NoticiasDeleteManyArgs} args - Arguments to filter Noticias to delete.
     * @example
     * // Delete a few Noticias
     * const { count } = await prisma.noticias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticiasDeleteManyArgs>(args?: SelectSubset<T, NoticiasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noticias
     * const noticias = await prisma.noticias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticiasUpdateManyArgs>(args: SelectSubset<T, NoticiasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Noticias.
     * @param {NoticiasUpsertArgs} args - Arguments to update or create a Noticias.
     * @example
     * // Update or create a Noticias
     * const noticias = await prisma.noticias.upsert({
     *   create: {
     *     // ... data to create a Noticias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noticias we want to update
     *   }
     * })
     */
    upsert<T extends NoticiasUpsertArgs>(args: SelectSubset<T, NoticiasUpsertArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasCountArgs} args - Arguments to filter Noticias to count.
     * @example
     * // Count the number of Noticias
     * const count = await prisma.noticias.count({
     *   where: {
     *     // ... the filter for the Noticias we want to count
     *   }
     * })
    **/
    count<T extends NoticiasCountArgs>(
      args?: Subset<T, NoticiasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiasAggregateArgs>(args: Subset<T, NoticiasAggregateArgs>): Prisma.PrismaPromise<GetNoticiasAggregateType<T>>

    /**
     * Group by Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasGroupByArgs} args - Group by arguments.
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
      T extends NoticiasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticiasGroupByArgs['orderBy'] }
        : { orderBy?: NoticiasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticiasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Noticias model
   */
  readonly fields: NoticiasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Noticias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticiasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Noticias model
   */ 
  interface NoticiasFieldRefs {
    readonly id: FieldRef<"Noticias", 'Int'>
    readonly titulo: FieldRef<"Noticias", 'String'>
    readonly contenido: FieldRef<"Noticias", 'String'>
    readonly imagenUrl: FieldRef<"Noticias", 'String'>
    readonly createdAt: FieldRef<"Noticias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Noticias findUnique
   */
  export type NoticiasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where: NoticiasWhereUniqueInput
  }

  /**
   * Noticias findUniqueOrThrow
   */
  export type NoticiasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where: NoticiasWhereUniqueInput
  }

  /**
   * Noticias findFirst
   */
  export type NoticiasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiasOrderByWithRelationInput | NoticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * Noticias findFirstOrThrow
   */
  export type NoticiasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiasOrderByWithRelationInput | NoticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * Noticias findMany
   */
  export type NoticiasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiasOrderByWithRelationInput | NoticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Noticias.
     */
    cursor?: NoticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * Noticias create
   */
  export type NoticiasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * The data needed to create a Noticias.
     */
    data: XOR<NoticiasCreateInput, NoticiasUncheckedCreateInput>
  }

  /**
   * Noticias createMany
   */
  export type NoticiasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Noticias.
     */
    data: NoticiasCreateManyInput | NoticiasCreateManyInput[]
  }

  /**
   * Noticias createManyAndReturn
   */
  export type NoticiasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Noticias.
     */
    data: NoticiasCreateManyInput | NoticiasCreateManyInput[]
  }

  /**
   * Noticias update
   */
  export type NoticiasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * The data needed to update a Noticias.
     */
    data: XOR<NoticiasUpdateInput, NoticiasUncheckedUpdateInput>
    /**
     * Choose, which Noticias to update.
     */
    where: NoticiasWhereUniqueInput
  }

  /**
   * Noticias updateMany
   */
  export type NoticiasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiasUpdateManyMutationInput, NoticiasUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiasWhereInput
  }

  /**
   * Noticias upsert
   */
  export type NoticiasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * The filter to search for the Noticias to update in case it exists.
     */
    where: NoticiasWhereUniqueInput
    /**
     * In case the Noticias found by the `where` argument doesn't exist, create a new Noticias with this data.
     */
    create: XOR<NoticiasCreateInput, NoticiasUncheckedCreateInput>
    /**
     * In case the Noticias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticiasUpdateInput, NoticiasUncheckedUpdateInput>
  }

  /**
   * Noticias delete
   */
  export type NoticiasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter which Noticias to delete.
     */
    where: NoticiasWhereUniqueInput
  }

  /**
   * Noticias deleteMany
   */
  export type NoticiasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to delete
     */
    where?: NoticiasWhereInput
  }

  /**
   * Noticias without action
   */
  export type NoticiasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nombreEmpresa: 'nombreEmpresa',
    comentario: 'comentario'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    nombreArea: 'nombreArea',
    cuencaId: 'cuencaId',
    empresaId: 'empresaId',
    comentario: 'comentario'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const CuencaScalarFieldEnum: {
    id: 'id',
    nombreCuenca: 'nombreCuenca',
    comentario: 'comentario'
  };

  export type CuencaScalarFieldEnum = (typeof CuencaScalarFieldEnum)[keyof typeof CuencaScalarFieldEnum]


  export const PozoRecursoScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    mes: 'mes',
    anio: 'anio',
    observaciones: 'observaciones',
    tipoRecursoId: 'tipoRecursoId',
    fluidoId: 'fluidoId'
  };

  export type PozoRecursoScalarFieldEnum = (typeof PozoRecursoScalarFieldEnum)[keyof typeof PozoRecursoScalarFieldEnum]


  export const SistemaScalarFieldEnum: {
    id: 'id',
    nombreSistema: 'nombreSistema',
    sigla: 'sigla'
  };

  export type SistemaScalarFieldEnum = (typeof SistemaScalarFieldEnum)[keyof typeof SistemaScalarFieldEnum]


  export const PozoSistemaScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    mes: 'mes',
    anio: 'anio',
    observaciones: 'observaciones',
    sistemaId: 'sistemaId'
  };

  export type PozoSistemaScalarFieldEnum = (typeof PozoSistemaScalarFieldEnum)[keyof typeof PozoSistemaScalarFieldEnum]


  export const ProduccionEmpresaScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    mes: 'mes',
    anio: 'anio',
    observaciones: 'observaciones',
    fluidoId: 'fluidoId',
    empresaId: 'empresaId'
  };

  export type ProduccionEmpresaScalarFieldEnum = (typeof ProduccionEmpresaScalarFieldEnum)[keyof typeof ProduccionEmpresaScalarFieldEnum]


  export const ProduccionRecursoScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    mes: 'mes',
    anio: 'anio',
    observaciones: 'observaciones',
    fluidoId: 'fluidoId',
    tipoRecursoId: 'tipoRecursoId'
  };

  export type ProduccionRecursoScalarFieldEnum = (typeof ProduccionRecursoScalarFieldEnum)[keyof typeof ProduccionRecursoScalarFieldEnum]


  export const ProduccionAreaScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    mes: 'mes',
    anio: 'anio',
    observaciones: 'observaciones',
    fluidoId: 'fluidoId',
    areaId: 'areaId'
  };

  export type ProduccionAreaScalarFieldEnum = (typeof ProduccionAreaScalarFieldEnum)[keyof typeof ProduccionAreaScalarFieldEnum]


  export const TipoRecursoScalarFieldEnum: {
    id: 'id',
    tipoRecurso: 'tipoRecurso',
    subTipoRecurso: 'subTipoRecurso',
    comentario: 'comentario'
  };

  export type TipoRecursoScalarFieldEnum = (typeof TipoRecursoScalarFieldEnum)[keyof typeof TipoRecursoScalarFieldEnum]


  export const FluidoScalarFieldEnum: {
    id: 'id',
    tipoFluido: 'tipoFluido',
    comentario: 'comentario'
  };

  export type FluidoScalarFieldEnum = (typeof FluidoScalarFieldEnum)[keyof typeof FluidoScalarFieldEnum]


  export const NoticiasScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    contenido: 'contenido',
    imagenUrl: 'imagenUrl',
    createdAt: 'createdAt'
  };

  export type NoticiasScalarFieldEnum = (typeof NoticiasScalarFieldEnum)[keyof typeof NoticiasScalarFieldEnum]


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


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: IntFilter<"Empresa"> | number
    nombreEmpresa?: StringFilter<"Empresa"> | string
    comentario?: StringNullableFilter<"Empresa"> | string | null
    areas?: AreaListRelationFilter
    producciones?: ProduccionEmpresaListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nombreEmpresa?: SortOrder
    comentario?: SortOrderInput | SortOrder
    areas?: AreaOrderByRelationAggregateInput
    producciones?: ProduccionEmpresaOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombreEmpresa?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    comentario?: StringNullableFilter<"Empresa"> | string | null
    areas?: AreaListRelationFilter
    producciones?: ProduccionEmpresaListRelationFilter
  }, "id" | "nombreEmpresa">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nombreEmpresa?: SortOrder
    comentario?: SortOrderInput | SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _avg?: EmpresaAvgOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
    _sum?: EmpresaSumOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empresa"> | number
    nombreEmpresa?: StringWithAggregatesFilter<"Empresa"> | string
    comentario?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: IntFilter<"Area"> | number
    nombreArea?: StringFilter<"Area"> | string
    cuencaId?: IntFilter<"Area"> | number
    empresaId?: IntFilter<"Area"> | number
    comentario?: StringNullableFilter<"Area"> | string | null
    cuenca?: XOR<CuencaRelationFilter, CuencaWhereInput>
    empresa?: XOR<EmpresaRelationFilter, EmpresaWhereInput>
    producciones?: ProduccionAreaListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    nombreArea?: SortOrder
    cuencaId?: SortOrder
    empresaId?: SortOrder
    comentario?: SortOrderInput | SortOrder
    cuenca?: CuencaOrderByWithRelationInput
    empresa?: EmpresaOrderByWithRelationInput
    producciones?: ProduccionAreaOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    nombreArea?: StringFilter<"Area"> | string
    cuencaId?: IntFilter<"Area"> | number
    empresaId?: IntFilter<"Area"> | number
    comentario?: StringNullableFilter<"Area"> | string | null
    cuenca?: XOR<CuencaRelationFilter, CuencaWhereInput>
    empresa?: XOR<EmpresaRelationFilter, EmpresaWhereInput>
    producciones?: ProduccionAreaListRelationFilter
  }, "id">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    nombreArea?: SortOrder
    cuencaId?: SortOrder
    empresaId?: SortOrder
    comentario?: SortOrderInput | SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Area"> | number
    nombreArea?: StringWithAggregatesFilter<"Area"> | string
    cuencaId?: IntWithAggregatesFilter<"Area"> | number
    empresaId?: IntWithAggregatesFilter<"Area"> | number
    comentario?: StringNullableWithAggregatesFilter<"Area"> | string | null
  }

  export type CuencaWhereInput = {
    AND?: CuencaWhereInput | CuencaWhereInput[]
    OR?: CuencaWhereInput[]
    NOT?: CuencaWhereInput | CuencaWhereInput[]
    id?: IntFilter<"Cuenca"> | number
    nombreCuenca?: StringFilter<"Cuenca"> | string
    comentario?: StringNullableFilter<"Cuenca"> | string | null
    areas?: AreaListRelationFilter
  }

  export type CuencaOrderByWithRelationInput = {
    id?: SortOrder
    nombreCuenca?: SortOrder
    comentario?: SortOrderInput | SortOrder
    areas?: AreaOrderByRelationAggregateInput
  }

  export type CuencaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CuencaWhereInput | CuencaWhereInput[]
    OR?: CuencaWhereInput[]
    NOT?: CuencaWhereInput | CuencaWhereInput[]
    nombreCuenca?: StringFilter<"Cuenca"> | string
    comentario?: StringNullableFilter<"Cuenca"> | string | null
    areas?: AreaListRelationFilter
  }, "id">

  export type CuencaOrderByWithAggregationInput = {
    id?: SortOrder
    nombreCuenca?: SortOrder
    comentario?: SortOrderInput | SortOrder
    _count?: CuencaCountOrderByAggregateInput
    _avg?: CuencaAvgOrderByAggregateInput
    _max?: CuencaMaxOrderByAggregateInput
    _min?: CuencaMinOrderByAggregateInput
    _sum?: CuencaSumOrderByAggregateInput
  }

  export type CuencaScalarWhereWithAggregatesInput = {
    AND?: CuencaScalarWhereWithAggregatesInput | CuencaScalarWhereWithAggregatesInput[]
    OR?: CuencaScalarWhereWithAggregatesInput[]
    NOT?: CuencaScalarWhereWithAggregatesInput | CuencaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cuenca"> | number
    nombreCuenca?: StringWithAggregatesFilter<"Cuenca"> | string
    comentario?: StringNullableWithAggregatesFilter<"Cuenca"> | string | null
  }

  export type PozoRecursoWhereInput = {
    AND?: PozoRecursoWhereInput | PozoRecursoWhereInput[]
    OR?: PozoRecursoWhereInput[]
    NOT?: PozoRecursoWhereInput | PozoRecursoWhereInput[]
    id?: IntFilter<"PozoRecurso"> | number
    cantidad?: IntFilter<"PozoRecurso"> | number
    mes?: IntNullableFilter<"PozoRecurso"> | number | null
    anio?: IntFilter<"PozoRecurso"> | number
    observaciones?: StringNullableFilter<"PozoRecurso"> | string | null
    tipoRecursoId?: IntFilter<"PozoRecurso"> | number
    fluidoId?: IntFilter<"PozoRecurso"> | number
    tipoRecurso?: XOR<TipoRecursoRelationFilter, TipoRecursoWhereInput>
    fluido?: XOR<FluidoRelationFilter, FluidoWhereInput>
  }

  export type PozoRecursoOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    tipoRecursoId?: SortOrder
    fluidoId?: SortOrder
    tipoRecurso?: TipoRecursoOrderByWithRelationInput
    fluido?: FluidoOrderByWithRelationInput
  }

  export type PozoRecursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PozoRecursoWhereInput | PozoRecursoWhereInput[]
    OR?: PozoRecursoWhereInput[]
    NOT?: PozoRecursoWhereInput | PozoRecursoWhereInput[]
    cantidad?: IntFilter<"PozoRecurso"> | number
    mes?: IntNullableFilter<"PozoRecurso"> | number | null
    anio?: IntFilter<"PozoRecurso"> | number
    observaciones?: StringNullableFilter<"PozoRecurso"> | string | null
    tipoRecursoId?: IntFilter<"PozoRecurso"> | number
    fluidoId?: IntFilter<"PozoRecurso"> | number
    tipoRecurso?: XOR<TipoRecursoRelationFilter, TipoRecursoWhereInput>
    fluido?: XOR<FluidoRelationFilter, FluidoWhereInput>
  }, "id">

  export type PozoRecursoOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    tipoRecursoId?: SortOrder
    fluidoId?: SortOrder
    _count?: PozoRecursoCountOrderByAggregateInput
    _avg?: PozoRecursoAvgOrderByAggregateInput
    _max?: PozoRecursoMaxOrderByAggregateInput
    _min?: PozoRecursoMinOrderByAggregateInput
    _sum?: PozoRecursoSumOrderByAggregateInput
  }

  export type PozoRecursoScalarWhereWithAggregatesInput = {
    AND?: PozoRecursoScalarWhereWithAggregatesInput | PozoRecursoScalarWhereWithAggregatesInput[]
    OR?: PozoRecursoScalarWhereWithAggregatesInput[]
    NOT?: PozoRecursoScalarWhereWithAggregatesInput | PozoRecursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PozoRecurso"> | number
    cantidad?: IntWithAggregatesFilter<"PozoRecurso"> | number
    mes?: IntNullableWithAggregatesFilter<"PozoRecurso"> | number | null
    anio?: IntWithAggregatesFilter<"PozoRecurso"> | number
    observaciones?: StringNullableWithAggregatesFilter<"PozoRecurso"> | string | null
    tipoRecursoId?: IntWithAggregatesFilter<"PozoRecurso"> | number
    fluidoId?: IntWithAggregatesFilter<"PozoRecurso"> | number
  }

  export type SistemaWhereInput = {
    AND?: SistemaWhereInput | SistemaWhereInput[]
    OR?: SistemaWhereInput[]
    NOT?: SistemaWhereInput | SistemaWhereInput[]
    id?: IntFilter<"Sistema"> | number
    nombreSistema?: StringFilter<"Sistema"> | string
    sigla?: StringFilter<"Sistema"> | string
    pozos?: PozoSistemaListRelationFilter
  }

  export type SistemaOrderByWithRelationInput = {
    id?: SortOrder
    nombreSistema?: SortOrder
    sigla?: SortOrder
    pozos?: PozoSistemaOrderByRelationAggregateInput
  }

  export type SistemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SistemaWhereInput | SistemaWhereInput[]
    OR?: SistemaWhereInput[]
    NOT?: SistemaWhereInput | SistemaWhereInput[]
    nombreSistema?: StringFilter<"Sistema"> | string
    sigla?: StringFilter<"Sistema"> | string
    pozos?: PozoSistemaListRelationFilter
  }, "id">

  export type SistemaOrderByWithAggregationInput = {
    id?: SortOrder
    nombreSistema?: SortOrder
    sigla?: SortOrder
    _count?: SistemaCountOrderByAggregateInput
    _avg?: SistemaAvgOrderByAggregateInput
    _max?: SistemaMaxOrderByAggregateInput
    _min?: SistemaMinOrderByAggregateInput
    _sum?: SistemaSumOrderByAggregateInput
  }

  export type SistemaScalarWhereWithAggregatesInput = {
    AND?: SistemaScalarWhereWithAggregatesInput | SistemaScalarWhereWithAggregatesInput[]
    OR?: SistemaScalarWhereWithAggregatesInput[]
    NOT?: SistemaScalarWhereWithAggregatesInput | SistemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sistema"> | number
    nombreSistema?: StringWithAggregatesFilter<"Sistema"> | string
    sigla?: StringWithAggregatesFilter<"Sistema"> | string
  }

  export type PozoSistemaWhereInput = {
    AND?: PozoSistemaWhereInput | PozoSistemaWhereInput[]
    OR?: PozoSistemaWhereInput[]
    NOT?: PozoSistemaWhereInput | PozoSistemaWhereInput[]
    id?: IntFilter<"PozoSistema"> | number
    cantidad?: IntFilter<"PozoSistema"> | number
    mes?: IntNullableFilter<"PozoSistema"> | number | null
    anio?: IntFilter<"PozoSistema"> | number
    observaciones?: StringNullableFilter<"PozoSistema"> | string | null
    sistemaId?: IntFilter<"PozoSistema"> | number
    sistema?: XOR<SistemaRelationFilter, SistemaWhereInput>
  }

  export type PozoSistemaOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    sistemaId?: SortOrder
    sistema?: SistemaOrderByWithRelationInput
  }

  export type PozoSistemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PozoSistemaWhereInput | PozoSistemaWhereInput[]
    OR?: PozoSistemaWhereInput[]
    NOT?: PozoSistemaWhereInput | PozoSistemaWhereInput[]
    cantidad?: IntFilter<"PozoSistema"> | number
    mes?: IntNullableFilter<"PozoSistema"> | number | null
    anio?: IntFilter<"PozoSistema"> | number
    observaciones?: StringNullableFilter<"PozoSistema"> | string | null
    sistemaId?: IntFilter<"PozoSistema"> | number
    sistema?: XOR<SistemaRelationFilter, SistemaWhereInput>
  }, "id">

  export type PozoSistemaOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    sistemaId?: SortOrder
    _count?: PozoSistemaCountOrderByAggregateInput
    _avg?: PozoSistemaAvgOrderByAggregateInput
    _max?: PozoSistemaMaxOrderByAggregateInput
    _min?: PozoSistemaMinOrderByAggregateInput
    _sum?: PozoSistemaSumOrderByAggregateInput
  }

  export type PozoSistemaScalarWhereWithAggregatesInput = {
    AND?: PozoSistemaScalarWhereWithAggregatesInput | PozoSistemaScalarWhereWithAggregatesInput[]
    OR?: PozoSistemaScalarWhereWithAggregatesInput[]
    NOT?: PozoSistemaScalarWhereWithAggregatesInput | PozoSistemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PozoSistema"> | number
    cantidad?: IntWithAggregatesFilter<"PozoSistema"> | number
    mes?: IntNullableWithAggregatesFilter<"PozoSistema"> | number | null
    anio?: IntWithAggregatesFilter<"PozoSistema"> | number
    observaciones?: StringNullableWithAggregatesFilter<"PozoSistema"> | string | null
    sistemaId?: IntWithAggregatesFilter<"PozoSistema"> | number
  }

  export type ProduccionEmpresaWhereInput = {
    AND?: ProduccionEmpresaWhereInput | ProduccionEmpresaWhereInput[]
    OR?: ProduccionEmpresaWhereInput[]
    NOT?: ProduccionEmpresaWhereInput | ProduccionEmpresaWhereInput[]
    id?: IntFilter<"ProduccionEmpresa"> | number
    cantidad?: IntFilter<"ProduccionEmpresa"> | number
    mes?: IntNullableFilter<"ProduccionEmpresa"> | number | null
    anio?: IntFilter<"ProduccionEmpresa"> | number
    observaciones?: StringNullableFilter<"ProduccionEmpresa"> | string | null
    fluidoId?: IntFilter<"ProduccionEmpresa"> | number
    empresaId?: IntFilter<"ProduccionEmpresa"> | number
    fluido?: XOR<FluidoRelationFilter, FluidoWhereInput>
    empresa?: XOR<EmpresaRelationFilter, EmpresaWhereInput>
  }

  export type ProduccionEmpresaOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fluidoId?: SortOrder
    empresaId?: SortOrder
    fluido?: FluidoOrderByWithRelationInput
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type ProduccionEmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProduccionEmpresaWhereInput | ProduccionEmpresaWhereInput[]
    OR?: ProduccionEmpresaWhereInput[]
    NOT?: ProduccionEmpresaWhereInput | ProduccionEmpresaWhereInput[]
    cantidad?: IntFilter<"ProduccionEmpresa"> | number
    mes?: IntNullableFilter<"ProduccionEmpresa"> | number | null
    anio?: IntFilter<"ProduccionEmpresa"> | number
    observaciones?: StringNullableFilter<"ProduccionEmpresa"> | string | null
    fluidoId?: IntFilter<"ProduccionEmpresa"> | number
    empresaId?: IntFilter<"ProduccionEmpresa"> | number
    fluido?: XOR<FluidoRelationFilter, FluidoWhereInput>
    empresa?: XOR<EmpresaRelationFilter, EmpresaWhereInput>
  }, "id">

  export type ProduccionEmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fluidoId?: SortOrder
    empresaId?: SortOrder
    _count?: ProduccionEmpresaCountOrderByAggregateInput
    _avg?: ProduccionEmpresaAvgOrderByAggregateInput
    _max?: ProduccionEmpresaMaxOrderByAggregateInput
    _min?: ProduccionEmpresaMinOrderByAggregateInput
    _sum?: ProduccionEmpresaSumOrderByAggregateInput
  }

  export type ProduccionEmpresaScalarWhereWithAggregatesInput = {
    AND?: ProduccionEmpresaScalarWhereWithAggregatesInput | ProduccionEmpresaScalarWhereWithAggregatesInput[]
    OR?: ProduccionEmpresaScalarWhereWithAggregatesInput[]
    NOT?: ProduccionEmpresaScalarWhereWithAggregatesInput | ProduccionEmpresaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProduccionEmpresa"> | number
    cantidad?: IntWithAggregatesFilter<"ProduccionEmpresa"> | number
    mes?: IntNullableWithAggregatesFilter<"ProduccionEmpresa"> | number | null
    anio?: IntWithAggregatesFilter<"ProduccionEmpresa"> | number
    observaciones?: StringNullableWithAggregatesFilter<"ProduccionEmpresa"> | string | null
    fluidoId?: IntWithAggregatesFilter<"ProduccionEmpresa"> | number
    empresaId?: IntWithAggregatesFilter<"ProduccionEmpresa"> | number
  }

  export type ProduccionRecursoWhereInput = {
    AND?: ProduccionRecursoWhereInput | ProduccionRecursoWhereInput[]
    OR?: ProduccionRecursoWhereInput[]
    NOT?: ProduccionRecursoWhereInput | ProduccionRecursoWhereInput[]
    id?: IntFilter<"ProduccionRecurso"> | number
    cantidad?: IntFilter<"ProduccionRecurso"> | number
    mes?: IntNullableFilter<"ProduccionRecurso"> | number | null
    anio?: IntFilter<"ProduccionRecurso"> | number
    observaciones?: StringNullableFilter<"ProduccionRecurso"> | string | null
    fluidoId?: IntFilter<"ProduccionRecurso"> | number
    tipoRecursoId?: IntFilter<"ProduccionRecurso"> | number
    fluido?: XOR<FluidoRelationFilter, FluidoWhereInput>
    tipoRecurso?: XOR<TipoRecursoRelationFilter, TipoRecursoWhereInput>
  }

  export type ProduccionRecursoOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fluidoId?: SortOrder
    tipoRecursoId?: SortOrder
    fluido?: FluidoOrderByWithRelationInput
    tipoRecurso?: TipoRecursoOrderByWithRelationInput
  }

  export type ProduccionRecursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProduccionRecursoWhereInput | ProduccionRecursoWhereInput[]
    OR?: ProduccionRecursoWhereInput[]
    NOT?: ProduccionRecursoWhereInput | ProduccionRecursoWhereInput[]
    cantidad?: IntFilter<"ProduccionRecurso"> | number
    mes?: IntNullableFilter<"ProduccionRecurso"> | number | null
    anio?: IntFilter<"ProduccionRecurso"> | number
    observaciones?: StringNullableFilter<"ProduccionRecurso"> | string | null
    fluidoId?: IntFilter<"ProduccionRecurso"> | number
    tipoRecursoId?: IntFilter<"ProduccionRecurso"> | number
    fluido?: XOR<FluidoRelationFilter, FluidoWhereInput>
    tipoRecurso?: XOR<TipoRecursoRelationFilter, TipoRecursoWhereInput>
  }, "id">

  export type ProduccionRecursoOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fluidoId?: SortOrder
    tipoRecursoId?: SortOrder
    _count?: ProduccionRecursoCountOrderByAggregateInput
    _avg?: ProduccionRecursoAvgOrderByAggregateInput
    _max?: ProduccionRecursoMaxOrderByAggregateInput
    _min?: ProduccionRecursoMinOrderByAggregateInput
    _sum?: ProduccionRecursoSumOrderByAggregateInput
  }

  export type ProduccionRecursoScalarWhereWithAggregatesInput = {
    AND?: ProduccionRecursoScalarWhereWithAggregatesInput | ProduccionRecursoScalarWhereWithAggregatesInput[]
    OR?: ProduccionRecursoScalarWhereWithAggregatesInput[]
    NOT?: ProduccionRecursoScalarWhereWithAggregatesInput | ProduccionRecursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProduccionRecurso"> | number
    cantidad?: IntWithAggregatesFilter<"ProduccionRecurso"> | number
    mes?: IntNullableWithAggregatesFilter<"ProduccionRecurso"> | number | null
    anio?: IntWithAggregatesFilter<"ProduccionRecurso"> | number
    observaciones?: StringNullableWithAggregatesFilter<"ProduccionRecurso"> | string | null
    fluidoId?: IntWithAggregatesFilter<"ProduccionRecurso"> | number
    tipoRecursoId?: IntWithAggregatesFilter<"ProduccionRecurso"> | number
  }

  export type ProduccionAreaWhereInput = {
    AND?: ProduccionAreaWhereInput | ProduccionAreaWhereInput[]
    OR?: ProduccionAreaWhereInput[]
    NOT?: ProduccionAreaWhereInput | ProduccionAreaWhereInput[]
    id?: IntFilter<"ProduccionArea"> | number
    cantidad?: IntFilter<"ProduccionArea"> | number
    mes?: IntNullableFilter<"ProduccionArea"> | number | null
    anio?: IntFilter<"ProduccionArea"> | number
    observaciones?: StringNullableFilter<"ProduccionArea"> | string | null
    fluidoId?: IntFilter<"ProduccionArea"> | number
    areaId?: IntFilter<"ProduccionArea"> | number
    fluido?: XOR<FluidoRelationFilter, FluidoWhereInput>
    area?: XOR<AreaRelationFilter, AreaWhereInput>
  }

  export type ProduccionAreaOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fluidoId?: SortOrder
    areaId?: SortOrder
    fluido?: FluidoOrderByWithRelationInput
    area?: AreaOrderByWithRelationInput
  }

  export type ProduccionAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProduccionAreaWhereInput | ProduccionAreaWhereInput[]
    OR?: ProduccionAreaWhereInput[]
    NOT?: ProduccionAreaWhereInput | ProduccionAreaWhereInput[]
    cantidad?: IntFilter<"ProduccionArea"> | number
    mes?: IntNullableFilter<"ProduccionArea"> | number | null
    anio?: IntFilter<"ProduccionArea"> | number
    observaciones?: StringNullableFilter<"ProduccionArea"> | string | null
    fluidoId?: IntFilter<"ProduccionArea"> | number
    areaId?: IntFilter<"ProduccionArea"> | number
    fluido?: XOR<FluidoRelationFilter, FluidoWhereInput>
    area?: XOR<AreaRelationFilter, AreaWhereInput>
  }, "id">

  export type ProduccionAreaOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrderInput | SortOrder
    anio?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    fluidoId?: SortOrder
    areaId?: SortOrder
    _count?: ProduccionAreaCountOrderByAggregateInput
    _avg?: ProduccionAreaAvgOrderByAggregateInput
    _max?: ProduccionAreaMaxOrderByAggregateInput
    _min?: ProduccionAreaMinOrderByAggregateInput
    _sum?: ProduccionAreaSumOrderByAggregateInput
  }

  export type ProduccionAreaScalarWhereWithAggregatesInput = {
    AND?: ProduccionAreaScalarWhereWithAggregatesInput | ProduccionAreaScalarWhereWithAggregatesInput[]
    OR?: ProduccionAreaScalarWhereWithAggregatesInput[]
    NOT?: ProduccionAreaScalarWhereWithAggregatesInput | ProduccionAreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProduccionArea"> | number
    cantidad?: IntWithAggregatesFilter<"ProduccionArea"> | number
    mes?: IntNullableWithAggregatesFilter<"ProduccionArea"> | number | null
    anio?: IntWithAggregatesFilter<"ProduccionArea"> | number
    observaciones?: StringNullableWithAggregatesFilter<"ProduccionArea"> | string | null
    fluidoId?: IntWithAggregatesFilter<"ProduccionArea"> | number
    areaId?: IntWithAggregatesFilter<"ProduccionArea"> | number
  }

  export type TipoRecursoWhereInput = {
    AND?: TipoRecursoWhereInput | TipoRecursoWhereInput[]
    OR?: TipoRecursoWhereInput[]
    NOT?: TipoRecursoWhereInput | TipoRecursoWhereInput[]
    id?: IntFilter<"TipoRecurso"> | number
    tipoRecurso?: StringFilter<"TipoRecurso"> | string
    subTipoRecurso?: StringNullableFilter<"TipoRecurso"> | string | null
    comentario?: StringNullableFilter<"TipoRecurso"> | string | null
    produccion?: ProduccionRecursoListRelationFilter
    pozos?: PozoRecursoListRelationFilter
  }

  export type TipoRecursoOrderByWithRelationInput = {
    id?: SortOrder
    tipoRecurso?: SortOrder
    subTipoRecurso?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    produccion?: ProduccionRecursoOrderByRelationAggregateInput
    pozos?: PozoRecursoOrderByRelationAggregateInput
  }

  export type TipoRecursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoRecursoWhereInput | TipoRecursoWhereInput[]
    OR?: TipoRecursoWhereInput[]
    NOT?: TipoRecursoWhereInput | TipoRecursoWhereInput[]
    tipoRecurso?: StringFilter<"TipoRecurso"> | string
    subTipoRecurso?: StringNullableFilter<"TipoRecurso"> | string | null
    comentario?: StringNullableFilter<"TipoRecurso"> | string | null
    produccion?: ProduccionRecursoListRelationFilter
    pozos?: PozoRecursoListRelationFilter
  }, "id">

  export type TipoRecursoOrderByWithAggregationInput = {
    id?: SortOrder
    tipoRecurso?: SortOrder
    subTipoRecurso?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    _count?: TipoRecursoCountOrderByAggregateInput
    _avg?: TipoRecursoAvgOrderByAggregateInput
    _max?: TipoRecursoMaxOrderByAggregateInput
    _min?: TipoRecursoMinOrderByAggregateInput
    _sum?: TipoRecursoSumOrderByAggregateInput
  }

  export type TipoRecursoScalarWhereWithAggregatesInput = {
    AND?: TipoRecursoScalarWhereWithAggregatesInput | TipoRecursoScalarWhereWithAggregatesInput[]
    OR?: TipoRecursoScalarWhereWithAggregatesInput[]
    NOT?: TipoRecursoScalarWhereWithAggregatesInput | TipoRecursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoRecurso"> | number
    tipoRecurso?: StringWithAggregatesFilter<"TipoRecurso"> | string
    subTipoRecurso?: StringNullableWithAggregatesFilter<"TipoRecurso"> | string | null
    comentario?: StringNullableWithAggregatesFilter<"TipoRecurso"> | string | null
  }

  export type FluidoWhereInput = {
    AND?: FluidoWhereInput | FluidoWhereInput[]
    OR?: FluidoWhereInput[]
    NOT?: FluidoWhereInput | FluidoWhereInput[]
    id?: IntFilter<"Fluido"> | number
    tipoFluido?: StringFilter<"Fluido"> | string
    comentario?: StringNullableFilter<"Fluido"> | string | null
    produccionRecurso?: ProduccionRecursoListRelationFilter
    produccionArea?: ProduccionAreaListRelationFilter
    produccionEmpresa?: ProduccionEmpresaListRelationFilter
    pozos?: PozoRecursoListRelationFilter
  }

  export type FluidoOrderByWithRelationInput = {
    id?: SortOrder
    tipoFluido?: SortOrder
    comentario?: SortOrderInput | SortOrder
    produccionRecurso?: ProduccionRecursoOrderByRelationAggregateInput
    produccionArea?: ProduccionAreaOrderByRelationAggregateInput
    produccionEmpresa?: ProduccionEmpresaOrderByRelationAggregateInput
    pozos?: PozoRecursoOrderByRelationAggregateInput
  }

  export type FluidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FluidoWhereInput | FluidoWhereInput[]
    OR?: FluidoWhereInput[]
    NOT?: FluidoWhereInput | FluidoWhereInput[]
    tipoFluido?: StringFilter<"Fluido"> | string
    comentario?: StringNullableFilter<"Fluido"> | string | null
    produccionRecurso?: ProduccionRecursoListRelationFilter
    produccionArea?: ProduccionAreaListRelationFilter
    produccionEmpresa?: ProduccionEmpresaListRelationFilter
    pozos?: PozoRecursoListRelationFilter
  }, "id">

  export type FluidoOrderByWithAggregationInput = {
    id?: SortOrder
    tipoFluido?: SortOrder
    comentario?: SortOrderInput | SortOrder
    _count?: FluidoCountOrderByAggregateInput
    _avg?: FluidoAvgOrderByAggregateInput
    _max?: FluidoMaxOrderByAggregateInput
    _min?: FluidoMinOrderByAggregateInput
    _sum?: FluidoSumOrderByAggregateInput
  }

  export type FluidoScalarWhereWithAggregatesInput = {
    AND?: FluidoScalarWhereWithAggregatesInput | FluidoScalarWhereWithAggregatesInput[]
    OR?: FluidoScalarWhereWithAggregatesInput[]
    NOT?: FluidoScalarWhereWithAggregatesInput | FluidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fluido"> | number
    tipoFluido?: StringWithAggregatesFilter<"Fluido"> | string
    comentario?: StringNullableWithAggregatesFilter<"Fluido"> | string | null
  }

  export type NoticiasWhereInput = {
    AND?: NoticiasWhereInput | NoticiasWhereInput[]
    OR?: NoticiasWhereInput[]
    NOT?: NoticiasWhereInput | NoticiasWhereInput[]
    id?: IntFilter<"Noticias"> | number
    titulo?: StringFilter<"Noticias"> | string
    contenido?: StringFilter<"Noticias"> | string
    imagenUrl?: StringNullableFilter<"Noticias"> | string | null
    createdAt?: DateTimeFilter<"Noticias"> | Date | string
  }

  export type NoticiasOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type NoticiasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticiasWhereInput | NoticiasWhereInput[]
    OR?: NoticiasWhereInput[]
    NOT?: NoticiasWhereInput | NoticiasWhereInput[]
    titulo?: StringFilter<"Noticias"> | string
    contenido?: StringFilter<"Noticias"> | string
    imagenUrl?: StringNullableFilter<"Noticias"> | string | null
    createdAt?: DateTimeFilter<"Noticias"> | Date | string
  }, "id">

  export type NoticiasOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NoticiasCountOrderByAggregateInput
    _avg?: NoticiasAvgOrderByAggregateInput
    _max?: NoticiasMaxOrderByAggregateInput
    _min?: NoticiasMinOrderByAggregateInput
    _sum?: NoticiasSumOrderByAggregateInput
  }

  export type NoticiasScalarWhereWithAggregatesInput = {
    AND?: NoticiasScalarWhereWithAggregatesInput | NoticiasScalarWhereWithAggregatesInput[]
    OR?: NoticiasScalarWhereWithAggregatesInput[]
    NOT?: NoticiasScalarWhereWithAggregatesInput | NoticiasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Noticias"> | number
    titulo?: StringWithAggregatesFilter<"Noticias"> | string
    contenido?: StringWithAggregatesFilter<"Noticias"> | string
    imagenUrl?: StringNullableWithAggregatesFilter<"Noticias"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Noticias"> | Date | string
  }

  export type EmpresaCreateInput = {
    nombreEmpresa: string
    comentario?: string | null
    areas?: AreaCreateNestedManyWithoutEmpresaInput
    producciones?: ProduccionEmpresaCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: number
    nombreEmpresa: string
    comentario?: string | null
    areas?: AreaUncheckedCreateNestedManyWithoutEmpresaInput
    producciones?: ProduccionEmpresaUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    nombreEmpresa?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    areas?: AreaUpdateManyWithoutEmpresaNestedInput
    producciones?: ProduccionEmpresaUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreEmpresa?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    areas?: AreaUncheckedUpdateManyWithoutEmpresaNestedInput
    producciones?: ProduccionEmpresaUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: number
    nombreEmpresa: string
    comentario?: string | null
  }

  export type EmpresaUpdateManyMutationInput = {
    nombreEmpresa?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreEmpresa?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AreaCreateInput = {
    nombreArea: string
    comentario?: string | null
    cuenca: CuencaCreateNestedOneWithoutAreasInput
    empresa: EmpresaCreateNestedOneWithoutAreasInput
    producciones?: ProduccionAreaCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: number
    nombreArea: string
    cuencaId: number
    empresaId: number
    comentario?: string | null
    producciones?: ProduccionAreaUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    nombreArea?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    cuenca?: CuencaUpdateOneRequiredWithoutAreasNestedInput
    empresa?: EmpresaUpdateOneRequiredWithoutAreasNestedInput
    producciones?: ProduccionAreaUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreArea?: StringFieldUpdateOperationsInput | string
    cuencaId?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    producciones?: ProduccionAreaUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: number
    nombreArea: string
    cuencaId: number
    empresaId: number
    comentario?: string | null
  }

  export type AreaUpdateManyMutationInput = {
    nombreArea?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreArea?: StringFieldUpdateOperationsInput | string
    cuencaId?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CuencaCreateInput = {
    nombreCuenca: string
    comentario?: string | null
    areas?: AreaCreateNestedManyWithoutCuencaInput
  }

  export type CuencaUncheckedCreateInput = {
    id?: number
    nombreCuenca: string
    comentario?: string | null
    areas?: AreaUncheckedCreateNestedManyWithoutCuencaInput
  }

  export type CuencaUpdateInput = {
    nombreCuenca?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    areas?: AreaUpdateManyWithoutCuencaNestedInput
  }

  export type CuencaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreCuenca?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    areas?: AreaUncheckedUpdateManyWithoutCuencaNestedInput
  }

  export type CuencaCreateManyInput = {
    id?: number
    nombreCuenca: string
    comentario?: string | null
  }

  export type CuencaUpdateManyMutationInput = {
    nombreCuenca?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CuencaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreCuenca?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PozoRecursoCreateInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecurso: TipoRecursoCreateNestedOneWithoutPozosInput
    fluido: FluidoCreateNestedOneWithoutPozosInput
  }

  export type PozoRecursoUncheckedCreateInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecursoId: number
    fluidoId: number
  }

  export type PozoRecursoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecurso?: TipoRecursoUpdateOneRequiredWithoutPozosNestedInput
    fluido?: FluidoUpdateOneRequiredWithoutPozosNestedInput
  }

  export type PozoRecursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecursoId?: IntFieldUpdateOperationsInput | number
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PozoRecursoCreateManyInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecursoId: number
    fluidoId: number
  }

  export type PozoRecursoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PozoRecursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecursoId?: IntFieldUpdateOperationsInput | number
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type SistemaCreateInput = {
    nombreSistema: string
    sigla: string
    pozos?: PozoSistemaCreateNestedManyWithoutSistemaInput
  }

  export type SistemaUncheckedCreateInput = {
    id?: number
    nombreSistema: string
    sigla: string
    pozos?: PozoSistemaUncheckedCreateNestedManyWithoutSistemaInput
  }

  export type SistemaUpdateInput = {
    nombreSistema?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    pozos?: PozoSistemaUpdateManyWithoutSistemaNestedInput
  }

  export type SistemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreSistema?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    pozos?: PozoSistemaUncheckedUpdateManyWithoutSistemaNestedInput
  }

  export type SistemaCreateManyInput = {
    id?: number
    nombreSistema: string
    sigla: string
  }

  export type SistemaUpdateManyMutationInput = {
    nombreSistema?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type SistemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreSistema?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type PozoSistemaCreateInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    sistema: SistemaCreateNestedOneWithoutPozosInput
  }

  export type PozoSistemaUncheckedCreateInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    sistemaId: number
  }

  export type PozoSistemaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    sistema?: SistemaUpdateOneRequiredWithoutPozosNestedInput
  }

  export type PozoSistemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    sistemaId?: IntFieldUpdateOperationsInput | number
  }

  export type PozoSistemaCreateManyInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    sistemaId: number
  }

  export type PozoSistemaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PozoSistemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    sistemaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionEmpresaCreateInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluido: FluidoCreateNestedOneWithoutProduccionEmpresaInput
    empresa: EmpresaCreateNestedOneWithoutProduccionesInput
  }

  export type ProduccionEmpresaUncheckedCreateInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
    empresaId: number
  }

  export type ProduccionEmpresaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluido?: FluidoUpdateOneRequiredWithoutProduccionEmpresaNestedInput
    empresa?: EmpresaUpdateOneRequiredWithoutProduccionesNestedInput
  }

  export type ProduccionEmpresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionEmpresaCreateManyInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
    empresaId: number
  }

  export type ProduccionEmpresaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduccionEmpresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionRecursoCreateInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluido: FluidoCreateNestedOneWithoutProduccionRecursoInput
    tipoRecurso: TipoRecursoCreateNestedOneWithoutProduccionInput
  }

  export type ProduccionRecursoUncheckedCreateInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
    tipoRecursoId: number
  }

  export type ProduccionRecursoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluido?: FluidoUpdateOneRequiredWithoutProduccionRecursoNestedInput
    tipoRecurso?: TipoRecursoUpdateOneRequiredWithoutProduccionNestedInput
  }

  export type ProduccionRecursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
    tipoRecursoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionRecursoCreateManyInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
    tipoRecursoId: number
  }

  export type ProduccionRecursoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduccionRecursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
    tipoRecursoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionAreaCreateInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluido: FluidoCreateNestedOneWithoutProduccionAreaInput
    area: AreaCreateNestedOneWithoutProduccionesInput
  }

  export type ProduccionAreaUncheckedCreateInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
    areaId: number
  }

  export type ProduccionAreaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluido?: FluidoUpdateOneRequiredWithoutProduccionAreaNestedInput
    area?: AreaUpdateOneRequiredWithoutProduccionesNestedInput
  }

  export type ProduccionAreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionAreaCreateManyInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
    areaId: number
  }

  export type ProduccionAreaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduccionAreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type TipoRecursoCreateInput = {
    tipoRecurso: string
    subTipoRecurso?: string | null
    comentario?: string | null
    produccion?: ProduccionRecursoCreateNestedManyWithoutTipoRecursoInput
    pozos?: PozoRecursoCreateNestedManyWithoutTipoRecursoInput
  }

  export type TipoRecursoUncheckedCreateInput = {
    id?: number
    tipoRecurso: string
    subTipoRecurso?: string | null
    comentario?: string | null
    produccion?: ProduccionRecursoUncheckedCreateNestedManyWithoutTipoRecursoInput
    pozos?: PozoRecursoUncheckedCreateNestedManyWithoutTipoRecursoInput
  }

  export type TipoRecursoUpdateInput = {
    tipoRecurso?: StringFieldUpdateOperationsInput | string
    subTipoRecurso?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccion?: ProduccionRecursoUpdateManyWithoutTipoRecursoNestedInput
    pozos?: PozoRecursoUpdateManyWithoutTipoRecursoNestedInput
  }

  export type TipoRecursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoRecurso?: StringFieldUpdateOperationsInput | string
    subTipoRecurso?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccion?: ProduccionRecursoUncheckedUpdateManyWithoutTipoRecursoNestedInput
    pozos?: PozoRecursoUncheckedUpdateManyWithoutTipoRecursoNestedInput
  }

  export type TipoRecursoCreateManyInput = {
    id?: number
    tipoRecurso: string
    subTipoRecurso?: string | null
    comentario?: string | null
  }

  export type TipoRecursoUpdateManyMutationInput = {
    tipoRecurso?: StringFieldUpdateOperationsInput | string
    subTipoRecurso?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoRecursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoRecurso?: StringFieldUpdateOperationsInput | string
    subTipoRecurso?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FluidoCreateInput = {
    tipoFluido: string
    comentario?: string | null
    produccionRecurso?: ProduccionRecursoCreateNestedManyWithoutFluidoInput
    produccionArea?: ProduccionAreaCreateNestedManyWithoutFluidoInput
    produccionEmpresa?: ProduccionEmpresaCreateNestedManyWithoutFluidoInput
    pozos?: PozoRecursoCreateNestedManyWithoutFluidoInput
  }

  export type FluidoUncheckedCreateInput = {
    id?: number
    tipoFluido: string
    comentario?: string | null
    produccionRecurso?: ProduccionRecursoUncheckedCreateNestedManyWithoutFluidoInput
    produccionArea?: ProduccionAreaUncheckedCreateNestedManyWithoutFluidoInput
    produccionEmpresa?: ProduccionEmpresaUncheckedCreateNestedManyWithoutFluidoInput
    pozos?: PozoRecursoUncheckedCreateNestedManyWithoutFluidoInput
  }

  export type FluidoUpdateInput = {
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionRecurso?: ProduccionRecursoUpdateManyWithoutFluidoNestedInput
    produccionArea?: ProduccionAreaUpdateManyWithoutFluidoNestedInput
    produccionEmpresa?: ProduccionEmpresaUpdateManyWithoutFluidoNestedInput
    pozos?: PozoRecursoUpdateManyWithoutFluidoNestedInput
  }

  export type FluidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionRecurso?: ProduccionRecursoUncheckedUpdateManyWithoutFluidoNestedInput
    produccionArea?: ProduccionAreaUncheckedUpdateManyWithoutFluidoNestedInput
    produccionEmpresa?: ProduccionEmpresaUncheckedUpdateManyWithoutFluidoNestedInput
    pozos?: PozoRecursoUncheckedUpdateManyWithoutFluidoNestedInput
  }

  export type FluidoCreateManyInput = {
    id?: number
    tipoFluido: string
    comentario?: string | null
  }

  export type FluidoUpdateManyMutationInput = {
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FluidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticiasCreateInput = {
    titulo: string
    contenido: string
    imagenUrl?: string | null
    createdAt?: Date | string
  }

  export type NoticiasUncheckedCreateInput = {
    id?: number
    titulo: string
    contenido: string
    imagenUrl?: string | null
    createdAt?: Date | string
  }

  export type NoticiasUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticiasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticiasCreateManyInput = {
    id?: number
    titulo: string
    contenido: string
    imagenUrl?: string | null
    createdAt?: Date | string
  }

  export type NoticiasUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticiasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type ProduccionEmpresaListRelationFilter = {
    every?: ProduccionEmpresaWhereInput
    some?: ProduccionEmpresaWhereInput
    none?: ProduccionEmpresaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProduccionEmpresaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nombreEmpresa?: SortOrder
    comentario?: SortOrder
  }

  export type EmpresaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreEmpresa?: SortOrder
    comentario?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nombreEmpresa?: SortOrder
    comentario?: SortOrder
  }

  export type EmpresaSumOrderByAggregateInput = {
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CuencaRelationFilter = {
    is?: CuencaWhereInput
    isNot?: CuencaWhereInput
  }

  export type EmpresaRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type ProduccionAreaListRelationFilter = {
    every?: ProduccionAreaWhereInput
    some?: ProduccionAreaWhereInput
    none?: ProduccionAreaWhereInput
  }

  export type ProduccionAreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    nombreArea?: SortOrder
    cuencaId?: SortOrder
    empresaId?: SortOrder
    comentario?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    id?: SortOrder
    cuencaId?: SortOrder
    empresaId?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreArea?: SortOrder
    cuencaId?: SortOrder
    empresaId?: SortOrder
    comentario?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    nombreArea?: SortOrder
    cuencaId?: SortOrder
    empresaId?: SortOrder
    comentario?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    id?: SortOrder
    cuencaId?: SortOrder
    empresaId?: SortOrder
  }

  export type CuencaCountOrderByAggregateInput = {
    id?: SortOrder
    nombreCuenca?: SortOrder
    comentario?: SortOrder
  }

  export type CuencaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CuencaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreCuenca?: SortOrder
    comentario?: SortOrder
  }

  export type CuencaMinOrderByAggregateInput = {
    id?: SortOrder
    nombreCuenca?: SortOrder
    comentario?: SortOrder
  }

  export type CuencaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TipoRecursoRelationFilter = {
    is?: TipoRecursoWhereInput
    isNot?: TipoRecursoWhereInput
  }

  export type FluidoRelationFilter = {
    is?: FluidoWhereInput
    isNot?: FluidoWhereInput
  }

  export type PozoRecursoCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    tipoRecursoId?: SortOrder
    fluidoId?: SortOrder
  }

  export type PozoRecursoAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    tipoRecursoId?: SortOrder
    fluidoId?: SortOrder
  }

  export type PozoRecursoMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    tipoRecursoId?: SortOrder
    fluidoId?: SortOrder
  }

  export type PozoRecursoMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    tipoRecursoId?: SortOrder
    fluidoId?: SortOrder
  }

  export type PozoRecursoSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    tipoRecursoId?: SortOrder
    fluidoId?: SortOrder
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

  export type PozoSistemaListRelationFilter = {
    every?: PozoSistemaWhereInput
    some?: PozoSistemaWhereInput
    none?: PozoSistemaWhereInput
  }

  export type PozoSistemaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SistemaCountOrderByAggregateInput = {
    id?: SortOrder
    nombreSistema?: SortOrder
    sigla?: SortOrder
  }

  export type SistemaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SistemaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreSistema?: SortOrder
    sigla?: SortOrder
  }

  export type SistemaMinOrderByAggregateInput = {
    id?: SortOrder
    nombreSistema?: SortOrder
    sigla?: SortOrder
  }

  export type SistemaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SistemaRelationFilter = {
    is?: SistemaWhereInput
    isNot?: SistemaWhereInput
  }

  export type PozoSistemaCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    sistemaId?: SortOrder
  }

  export type PozoSistemaAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    sistemaId?: SortOrder
  }

  export type PozoSistemaMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    sistemaId?: SortOrder
  }

  export type PozoSistemaMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    sistemaId?: SortOrder
  }

  export type PozoSistemaSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    sistemaId?: SortOrder
  }

  export type ProduccionEmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    empresaId?: SortOrder
  }

  export type ProduccionEmpresaAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    fluidoId?: SortOrder
    empresaId?: SortOrder
  }

  export type ProduccionEmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    empresaId?: SortOrder
  }

  export type ProduccionEmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    empresaId?: SortOrder
  }

  export type ProduccionEmpresaSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    fluidoId?: SortOrder
    empresaId?: SortOrder
  }

  export type ProduccionRecursoCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    tipoRecursoId?: SortOrder
  }

  export type ProduccionRecursoAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    fluidoId?: SortOrder
    tipoRecursoId?: SortOrder
  }

  export type ProduccionRecursoMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    tipoRecursoId?: SortOrder
  }

  export type ProduccionRecursoMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    tipoRecursoId?: SortOrder
  }

  export type ProduccionRecursoSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    fluidoId?: SortOrder
    tipoRecursoId?: SortOrder
  }

  export type AreaRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type ProduccionAreaCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    areaId?: SortOrder
  }

  export type ProduccionAreaAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    fluidoId?: SortOrder
    areaId?: SortOrder
  }

  export type ProduccionAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    areaId?: SortOrder
  }

  export type ProduccionAreaMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    observaciones?: SortOrder
    fluidoId?: SortOrder
    areaId?: SortOrder
  }

  export type ProduccionAreaSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    mes?: SortOrder
    anio?: SortOrder
    fluidoId?: SortOrder
    areaId?: SortOrder
  }

  export type ProduccionRecursoListRelationFilter = {
    every?: ProduccionRecursoWhereInput
    some?: ProduccionRecursoWhereInput
    none?: ProduccionRecursoWhereInput
  }

  export type PozoRecursoListRelationFilter = {
    every?: PozoRecursoWhereInput
    some?: PozoRecursoWhereInput
    none?: PozoRecursoWhereInput
  }

  export type ProduccionRecursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PozoRecursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoRecursoCountOrderByAggregateInput = {
    id?: SortOrder
    tipoRecurso?: SortOrder
    subTipoRecurso?: SortOrder
    comentario?: SortOrder
  }

  export type TipoRecursoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoRecursoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoRecurso?: SortOrder
    subTipoRecurso?: SortOrder
    comentario?: SortOrder
  }

  export type TipoRecursoMinOrderByAggregateInput = {
    id?: SortOrder
    tipoRecurso?: SortOrder
    subTipoRecurso?: SortOrder
    comentario?: SortOrder
  }

  export type TipoRecursoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FluidoCountOrderByAggregateInput = {
    id?: SortOrder
    tipoFluido?: SortOrder
    comentario?: SortOrder
  }

  export type FluidoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FluidoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoFluido?: SortOrder
    comentario?: SortOrder
  }

  export type FluidoMinOrderByAggregateInput = {
    id?: SortOrder
    tipoFluido?: SortOrder
    comentario?: SortOrder
  }

  export type FluidoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NoticiasCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagenUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticiasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticiasMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagenUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticiasMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagenUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticiasSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type AreaCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<AreaCreateWithoutEmpresaInput, AreaUncheckedCreateWithoutEmpresaInput> | AreaCreateWithoutEmpresaInput[] | AreaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutEmpresaInput | AreaCreateOrConnectWithoutEmpresaInput[]
    createMany?: AreaCreateManyEmpresaInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type ProduccionEmpresaCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ProduccionEmpresaCreateWithoutEmpresaInput, ProduccionEmpresaUncheckedCreateWithoutEmpresaInput> | ProduccionEmpresaCreateWithoutEmpresaInput[] | ProduccionEmpresaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ProduccionEmpresaCreateOrConnectWithoutEmpresaInput | ProduccionEmpresaCreateOrConnectWithoutEmpresaInput[]
    createMany?: ProduccionEmpresaCreateManyEmpresaInputEnvelope
    connect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<AreaCreateWithoutEmpresaInput, AreaUncheckedCreateWithoutEmpresaInput> | AreaCreateWithoutEmpresaInput[] | AreaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutEmpresaInput | AreaCreateOrConnectWithoutEmpresaInput[]
    createMany?: AreaCreateManyEmpresaInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type ProduccionEmpresaUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ProduccionEmpresaCreateWithoutEmpresaInput, ProduccionEmpresaUncheckedCreateWithoutEmpresaInput> | ProduccionEmpresaCreateWithoutEmpresaInput[] | ProduccionEmpresaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ProduccionEmpresaCreateOrConnectWithoutEmpresaInput | ProduccionEmpresaCreateOrConnectWithoutEmpresaInput[]
    createMany?: ProduccionEmpresaCreateManyEmpresaInputEnvelope
    connect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AreaUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<AreaCreateWithoutEmpresaInput, AreaUncheckedCreateWithoutEmpresaInput> | AreaCreateWithoutEmpresaInput[] | AreaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutEmpresaInput | AreaCreateOrConnectWithoutEmpresaInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutEmpresaInput | AreaUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: AreaCreateManyEmpresaInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutEmpresaInput | AreaUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutEmpresaInput | AreaUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type ProduccionEmpresaUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ProduccionEmpresaCreateWithoutEmpresaInput, ProduccionEmpresaUncheckedCreateWithoutEmpresaInput> | ProduccionEmpresaCreateWithoutEmpresaInput[] | ProduccionEmpresaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ProduccionEmpresaCreateOrConnectWithoutEmpresaInput | ProduccionEmpresaCreateOrConnectWithoutEmpresaInput[]
    upsert?: ProduccionEmpresaUpsertWithWhereUniqueWithoutEmpresaInput | ProduccionEmpresaUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ProduccionEmpresaCreateManyEmpresaInputEnvelope
    set?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    disconnect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    delete?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    connect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    update?: ProduccionEmpresaUpdateWithWhereUniqueWithoutEmpresaInput | ProduccionEmpresaUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ProduccionEmpresaUpdateManyWithWhereWithoutEmpresaInput | ProduccionEmpresaUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ProduccionEmpresaScalarWhereInput | ProduccionEmpresaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AreaUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<AreaCreateWithoutEmpresaInput, AreaUncheckedCreateWithoutEmpresaInput> | AreaCreateWithoutEmpresaInput[] | AreaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutEmpresaInput | AreaCreateOrConnectWithoutEmpresaInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutEmpresaInput | AreaUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: AreaCreateManyEmpresaInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutEmpresaInput | AreaUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutEmpresaInput | AreaUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type ProduccionEmpresaUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ProduccionEmpresaCreateWithoutEmpresaInput, ProduccionEmpresaUncheckedCreateWithoutEmpresaInput> | ProduccionEmpresaCreateWithoutEmpresaInput[] | ProduccionEmpresaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ProduccionEmpresaCreateOrConnectWithoutEmpresaInput | ProduccionEmpresaCreateOrConnectWithoutEmpresaInput[]
    upsert?: ProduccionEmpresaUpsertWithWhereUniqueWithoutEmpresaInput | ProduccionEmpresaUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ProduccionEmpresaCreateManyEmpresaInputEnvelope
    set?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    disconnect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    delete?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    connect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    update?: ProduccionEmpresaUpdateWithWhereUniqueWithoutEmpresaInput | ProduccionEmpresaUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ProduccionEmpresaUpdateManyWithWhereWithoutEmpresaInput | ProduccionEmpresaUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ProduccionEmpresaScalarWhereInput | ProduccionEmpresaScalarWhereInput[]
  }

  export type CuencaCreateNestedOneWithoutAreasInput = {
    create?: XOR<CuencaCreateWithoutAreasInput, CuencaUncheckedCreateWithoutAreasInput>
    connectOrCreate?: CuencaCreateOrConnectWithoutAreasInput
    connect?: CuencaWhereUniqueInput
  }

  export type EmpresaCreateNestedOneWithoutAreasInput = {
    create?: XOR<EmpresaCreateWithoutAreasInput, EmpresaUncheckedCreateWithoutAreasInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutAreasInput
    connect?: EmpresaWhereUniqueInput
  }

  export type ProduccionAreaCreateNestedManyWithoutAreaInput = {
    create?: XOR<ProduccionAreaCreateWithoutAreaInput, ProduccionAreaUncheckedCreateWithoutAreaInput> | ProduccionAreaCreateWithoutAreaInput[] | ProduccionAreaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ProduccionAreaCreateOrConnectWithoutAreaInput | ProduccionAreaCreateOrConnectWithoutAreaInput[]
    createMany?: ProduccionAreaCreateManyAreaInputEnvelope
    connect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
  }

  export type ProduccionAreaUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<ProduccionAreaCreateWithoutAreaInput, ProduccionAreaUncheckedCreateWithoutAreaInput> | ProduccionAreaCreateWithoutAreaInput[] | ProduccionAreaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ProduccionAreaCreateOrConnectWithoutAreaInput | ProduccionAreaCreateOrConnectWithoutAreaInput[]
    createMany?: ProduccionAreaCreateManyAreaInputEnvelope
    connect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
  }

  export type CuencaUpdateOneRequiredWithoutAreasNestedInput = {
    create?: XOR<CuencaCreateWithoutAreasInput, CuencaUncheckedCreateWithoutAreasInput>
    connectOrCreate?: CuencaCreateOrConnectWithoutAreasInput
    upsert?: CuencaUpsertWithoutAreasInput
    connect?: CuencaWhereUniqueInput
    update?: XOR<XOR<CuencaUpdateToOneWithWhereWithoutAreasInput, CuencaUpdateWithoutAreasInput>, CuencaUncheckedUpdateWithoutAreasInput>
  }

  export type EmpresaUpdateOneRequiredWithoutAreasNestedInput = {
    create?: XOR<EmpresaCreateWithoutAreasInput, EmpresaUncheckedCreateWithoutAreasInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutAreasInput
    upsert?: EmpresaUpsertWithoutAreasInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutAreasInput, EmpresaUpdateWithoutAreasInput>, EmpresaUncheckedUpdateWithoutAreasInput>
  }

  export type ProduccionAreaUpdateManyWithoutAreaNestedInput = {
    create?: XOR<ProduccionAreaCreateWithoutAreaInput, ProduccionAreaUncheckedCreateWithoutAreaInput> | ProduccionAreaCreateWithoutAreaInput[] | ProduccionAreaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ProduccionAreaCreateOrConnectWithoutAreaInput | ProduccionAreaCreateOrConnectWithoutAreaInput[]
    upsert?: ProduccionAreaUpsertWithWhereUniqueWithoutAreaInput | ProduccionAreaUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: ProduccionAreaCreateManyAreaInputEnvelope
    set?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    disconnect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    delete?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    connect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    update?: ProduccionAreaUpdateWithWhereUniqueWithoutAreaInput | ProduccionAreaUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: ProduccionAreaUpdateManyWithWhereWithoutAreaInput | ProduccionAreaUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: ProduccionAreaScalarWhereInput | ProduccionAreaScalarWhereInput[]
  }

  export type ProduccionAreaUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<ProduccionAreaCreateWithoutAreaInput, ProduccionAreaUncheckedCreateWithoutAreaInput> | ProduccionAreaCreateWithoutAreaInput[] | ProduccionAreaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ProduccionAreaCreateOrConnectWithoutAreaInput | ProduccionAreaCreateOrConnectWithoutAreaInput[]
    upsert?: ProduccionAreaUpsertWithWhereUniqueWithoutAreaInput | ProduccionAreaUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: ProduccionAreaCreateManyAreaInputEnvelope
    set?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    disconnect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    delete?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    connect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    update?: ProduccionAreaUpdateWithWhereUniqueWithoutAreaInput | ProduccionAreaUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: ProduccionAreaUpdateManyWithWhereWithoutAreaInput | ProduccionAreaUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: ProduccionAreaScalarWhereInput | ProduccionAreaScalarWhereInput[]
  }

  export type AreaCreateNestedManyWithoutCuencaInput = {
    create?: XOR<AreaCreateWithoutCuencaInput, AreaUncheckedCreateWithoutCuencaInput> | AreaCreateWithoutCuencaInput[] | AreaUncheckedCreateWithoutCuencaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCuencaInput | AreaCreateOrConnectWithoutCuencaInput[]
    createMany?: AreaCreateManyCuencaInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutCuencaInput = {
    create?: XOR<AreaCreateWithoutCuencaInput, AreaUncheckedCreateWithoutCuencaInput> | AreaCreateWithoutCuencaInput[] | AreaUncheckedCreateWithoutCuencaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCuencaInput | AreaCreateOrConnectWithoutCuencaInput[]
    createMany?: AreaCreateManyCuencaInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AreaUpdateManyWithoutCuencaNestedInput = {
    create?: XOR<AreaCreateWithoutCuencaInput, AreaUncheckedCreateWithoutCuencaInput> | AreaCreateWithoutCuencaInput[] | AreaUncheckedCreateWithoutCuencaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCuencaInput | AreaCreateOrConnectWithoutCuencaInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutCuencaInput | AreaUpsertWithWhereUniqueWithoutCuencaInput[]
    createMany?: AreaCreateManyCuencaInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutCuencaInput | AreaUpdateWithWhereUniqueWithoutCuencaInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutCuencaInput | AreaUpdateManyWithWhereWithoutCuencaInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutCuencaNestedInput = {
    create?: XOR<AreaCreateWithoutCuencaInput, AreaUncheckedCreateWithoutCuencaInput> | AreaCreateWithoutCuencaInput[] | AreaUncheckedCreateWithoutCuencaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCuencaInput | AreaCreateOrConnectWithoutCuencaInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutCuencaInput | AreaUpsertWithWhereUniqueWithoutCuencaInput[]
    createMany?: AreaCreateManyCuencaInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutCuencaInput | AreaUpdateWithWhereUniqueWithoutCuencaInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutCuencaInput | AreaUpdateManyWithWhereWithoutCuencaInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type TipoRecursoCreateNestedOneWithoutPozosInput = {
    create?: XOR<TipoRecursoCreateWithoutPozosInput, TipoRecursoUncheckedCreateWithoutPozosInput>
    connectOrCreate?: TipoRecursoCreateOrConnectWithoutPozosInput
    connect?: TipoRecursoWhereUniqueInput
  }

  export type FluidoCreateNestedOneWithoutPozosInput = {
    create?: XOR<FluidoCreateWithoutPozosInput, FluidoUncheckedCreateWithoutPozosInput>
    connectOrCreate?: FluidoCreateOrConnectWithoutPozosInput
    connect?: FluidoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TipoRecursoUpdateOneRequiredWithoutPozosNestedInput = {
    create?: XOR<TipoRecursoCreateWithoutPozosInput, TipoRecursoUncheckedCreateWithoutPozosInput>
    connectOrCreate?: TipoRecursoCreateOrConnectWithoutPozosInput
    upsert?: TipoRecursoUpsertWithoutPozosInput
    connect?: TipoRecursoWhereUniqueInput
    update?: XOR<XOR<TipoRecursoUpdateToOneWithWhereWithoutPozosInput, TipoRecursoUpdateWithoutPozosInput>, TipoRecursoUncheckedUpdateWithoutPozosInput>
  }

  export type FluidoUpdateOneRequiredWithoutPozosNestedInput = {
    create?: XOR<FluidoCreateWithoutPozosInput, FluidoUncheckedCreateWithoutPozosInput>
    connectOrCreate?: FluidoCreateOrConnectWithoutPozosInput
    upsert?: FluidoUpsertWithoutPozosInput
    connect?: FluidoWhereUniqueInput
    update?: XOR<XOR<FluidoUpdateToOneWithWhereWithoutPozosInput, FluidoUpdateWithoutPozosInput>, FluidoUncheckedUpdateWithoutPozosInput>
  }

  export type PozoSistemaCreateNestedManyWithoutSistemaInput = {
    create?: XOR<PozoSistemaCreateWithoutSistemaInput, PozoSistemaUncheckedCreateWithoutSistemaInput> | PozoSistemaCreateWithoutSistemaInput[] | PozoSistemaUncheckedCreateWithoutSistemaInput[]
    connectOrCreate?: PozoSistemaCreateOrConnectWithoutSistemaInput | PozoSistemaCreateOrConnectWithoutSistemaInput[]
    createMany?: PozoSistemaCreateManySistemaInputEnvelope
    connect?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
  }

  export type PozoSistemaUncheckedCreateNestedManyWithoutSistemaInput = {
    create?: XOR<PozoSistemaCreateWithoutSistemaInput, PozoSistemaUncheckedCreateWithoutSistemaInput> | PozoSistemaCreateWithoutSistemaInput[] | PozoSistemaUncheckedCreateWithoutSistemaInput[]
    connectOrCreate?: PozoSistemaCreateOrConnectWithoutSistemaInput | PozoSistemaCreateOrConnectWithoutSistemaInput[]
    createMany?: PozoSistemaCreateManySistemaInputEnvelope
    connect?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
  }

  export type PozoSistemaUpdateManyWithoutSistemaNestedInput = {
    create?: XOR<PozoSistemaCreateWithoutSistemaInput, PozoSistemaUncheckedCreateWithoutSistemaInput> | PozoSistemaCreateWithoutSistemaInput[] | PozoSistemaUncheckedCreateWithoutSistemaInput[]
    connectOrCreate?: PozoSistemaCreateOrConnectWithoutSistemaInput | PozoSistemaCreateOrConnectWithoutSistemaInput[]
    upsert?: PozoSistemaUpsertWithWhereUniqueWithoutSistemaInput | PozoSistemaUpsertWithWhereUniqueWithoutSistemaInput[]
    createMany?: PozoSistemaCreateManySistemaInputEnvelope
    set?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
    disconnect?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
    delete?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
    connect?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
    update?: PozoSistemaUpdateWithWhereUniqueWithoutSistemaInput | PozoSistemaUpdateWithWhereUniqueWithoutSistemaInput[]
    updateMany?: PozoSistemaUpdateManyWithWhereWithoutSistemaInput | PozoSistemaUpdateManyWithWhereWithoutSistemaInput[]
    deleteMany?: PozoSistemaScalarWhereInput | PozoSistemaScalarWhereInput[]
  }

  export type PozoSistemaUncheckedUpdateManyWithoutSistemaNestedInput = {
    create?: XOR<PozoSistemaCreateWithoutSistemaInput, PozoSistemaUncheckedCreateWithoutSistemaInput> | PozoSistemaCreateWithoutSistemaInput[] | PozoSistemaUncheckedCreateWithoutSistemaInput[]
    connectOrCreate?: PozoSistemaCreateOrConnectWithoutSistemaInput | PozoSistemaCreateOrConnectWithoutSistemaInput[]
    upsert?: PozoSistemaUpsertWithWhereUniqueWithoutSistemaInput | PozoSistemaUpsertWithWhereUniqueWithoutSistemaInput[]
    createMany?: PozoSistemaCreateManySistemaInputEnvelope
    set?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
    disconnect?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
    delete?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
    connect?: PozoSistemaWhereUniqueInput | PozoSistemaWhereUniqueInput[]
    update?: PozoSistemaUpdateWithWhereUniqueWithoutSistemaInput | PozoSistemaUpdateWithWhereUniqueWithoutSistemaInput[]
    updateMany?: PozoSistemaUpdateManyWithWhereWithoutSistemaInput | PozoSistemaUpdateManyWithWhereWithoutSistemaInput[]
    deleteMany?: PozoSistemaScalarWhereInput | PozoSistemaScalarWhereInput[]
  }

  export type SistemaCreateNestedOneWithoutPozosInput = {
    create?: XOR<SistemaCreateWithoutPozosInput, SistemaUncheckedCreateWithoutPozosInput>
    connectOrCreate?: SistemaCreateOrConnectWithoutPozosInput
    connect?: SistemaWhereUniqueInput
  }

  export type SistemaUpdateOneRequiredWithoutPozosNestedInput = {
    create?: XOR<SistemaCreateWithoutPozosInput, SistemaUncheckedCreateWithoutPozosInput>
    connectOrCreate?: SistemaCreateOrConnectWithoutPozosInput
    upsert?: SistemaUpsertWithoutPozosInput
    connect?: SistemaWhereUniqueInput
    update?: XOR<XOR<SistemaUpdateToOneWithWhereWithoutPozosInput, SistemaUpdateWithoutPozosInput>, SistemaUncheckedUpdateWithoutPozosInput>
  }

  export type FluidoCreateNestedOneWithoutProduccionEmpresaInput = {
    create?: XOR<FluidoCreateWithoutProduccionEmpresaInput, FluidoUncheckedCreateWithoutProduccionEmpresaInput>
    connectOrCreate?: FluidoCreateOrConnectWithoutProduccionEmpresaInput
    connect?: FluidoWhereUniqueInput
  }

  export type EmpresaCreateNestedOneWithoutProduccionesInput = {
    create?: XOR<EmpresaCreateWithoutProduccionesInput, EmpresaUncheckedCreateWithoutProduccionesInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutProduccionesInput
    connect?: EmpresaWhereUniqueInput
  }

  export type FluidoUpdateOneRequiredWithoutProduccionEmpresaNestedInput = {
    create?: XOR<FluidoCreateWithoutProduccionEmpresaInput, FluidoUncheckedCreateWithoutProduccionEmpresaInput>
    connectOrCreate?: FluidoCreateOrConnectWithoutProduccionEmpresaInput
    upsert?: FluidoUpsertWithoutProduccionEmpresaInput
    connect?: FluidoWhereUniqueInput
    update?: XOR<XOR<FluidoUpdateToOneWithWhereWithoutProduccionEmpresaInput, FluidoUpdateWithoutProduccionEmpresaInput>, FluidoUncheckedUpdateWithoutProduccionEmpresaInput>
  }

  export type EmpresaUpdateOneRequiredWithoutProduccionesNestedInput = {
    create?: XOR<EmpresaCreateWithoutProduccionesInput, EmpresaUncheckedCreateWithoutProduccionesInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutProduccionesInput
    upsert?: EmpresaUpsertWithoutProduccionesInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutProduccionesInput, EmpresaUpdateWithoutProduccionesInput>, EmpresaUncheckedUpdateWithoutProduccionesInput>
  }

  export type FluidoCreateNestedOneWithoutProduccionRecursoInput = {
    create?: XOR<FluidoCreateWithoutProduccionRecursoInput, FluidoUncheckedCreateWithoutProduccionRecursoInput>
    connectOrCreate?: FluidoCreateOrConnectWithoutProduccionRecursoInput
    connect?: FluidoWhereUniqueInput
  }

  export type TipoRecursoCreateNestedOneWithoutProduccionInput = {
    create?: XOR<TipoRecursoCreateWithoutProduccionInput, TipoRecursoUncheckedCreateWithoutProduccionInput>
    connectOrCreate?: TipoRecursoCreateOrConnectWithoutProduccionInput
    connect?: TipoRecursoWhereUniqueInput
  }

  export type FluidoUpdateOneRequiredWithoutProduccionRecursoNestedInput = {
    create?: XOR<FluidoCreateWithoutProduccionRecursoInput, FluidoUncheckedCreateWithoutProduccionRecursoInput>
    connectOrCreate?: FluidoCreateOrConnectWithoutProduccionRecursoInput
    upsert?: FluidoUpsertWithoutProduccionRecursoInput
    connect?: FluidoWhereUniqueInput
    update?: XOR<XOR<FluidoUpdateToOneWithWhereWithoutProduccionRecursoInput, FluidoUpdateWithoutProduccionRecursoInput>, FluidoUncheckedUpdateWithoutProduccionRecursoInput>
  }

  export type TipoRecursoUpdateOneRequiredWithoutProduccionNestedInput = {
    create?: XOR<TipoRecursoCreateWithoutProduccionInput, TipoRecursoUncheckedCreateWithoutProduccionInput>
    connectOrCreate?: TipoRecursoCreateOrConnectWithoutProduccionInput
    upsert?: TipoRecursoUpsertWithoutProduccionInput
    connect?: TipoRecursoWhereUniqueInput
    update?: XOR<XOR<TipoRecursoUpdateToOneWithWhereWithoutProduccionInput, TipoRecursoUpdateWithoutProduccionInput>, TipoRecursoUncheckedUpdateWithoutProduccionInput>
  }

  export type FluidoCreateNestedOneWithoutProduccionAreaInput = {
    create?: XOR<FluidoCreateWithoutProduccionAreaInput, FluidoUncheckedCreateWithoutProduccionAreaInput>
    connectOrCreate?: FluidoCreateOrConnectWithoutProduccionAreaInput
    connect?: FluidoWhereUniqueInput
  }

  export type AreaCreateNestedOneWithoutProduccionesInput = {
    create?: XOR<AreaCreateWithoutProduccionesInput, AreaUncheckedCreateWithoutProduccionesInput>
    connectOrCreate?: AreaCreateOrConnectWithoutProduccionesInput
    connect?: AreaWhereUniqueInput
  }

  export type FluidoUpdateOneRequiredWithoutProduccionAreaNestedInput = {
    create?: XOR<FluidoCreateWithoutProduccionAreaInput, FluidoUncheckedCreateWithoutProduccionAreaInput>
    connectOrCreate?: FluidoCreateOrConnectWithoutProduccionAreaInput
    upsert?: FluidoUpsertWithoutProduccionAreaInput
    connect?: FluidoWhereUniqueInput
    update?: XOR<XOR<FluidoUpdateToOneWithWhereWithoutProduccionAreaInput, FluidoUpdateWithoutProduccionAreaInput>, FluidoUncheckedUpdateWithoutProduccionAreaInput>
  }

  export type AreaUpdateOneRequiredWithoutProduccionesNestedInput = {
    create?: XOR<AreaCreateWithoutProduccionesInput, AreaUncheckedCreateWithoutProduccionesInput>
    connectOrCreate?: AreaCreateOrConnectWithoutProduccionesInput
    upsert?: AreaUpsertWithoutProduccionesInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutProduccionesInput, AreaUpdateWithoutProduccionesInput>, AreaUncheckedUpdateWithoutProduccionesInput>
  }

  export type ProduccionRecursoCreateNestedManyWithoutTipoRecursoInput = {
    create?: XOR<ProduccionRecursoCreateWithoutTipoRecursoInput, ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput> | ProduccionRecursoCreateWithoutTipoRecursoInput[] | ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput[]
    connectOrCreate?: ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput | ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput[]
    createMany?: ProduccionRecursoCreateManyTipoRecursoInputEnvelope
    connect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
  }

  export type PozoRecursoCreateNestedManyWithoutTipoRecursoInput = {
    create?: XOR<PozoRecursoCreateWithoutTipoRecursoInput, PozoRecursoUncheckedCreateWithoutTipoRecursoInput> | PozoRecursoCreateWithoutTipoRecursoInput[] | PozoRecursoUncheckedCreateWithoutTipoRecursoInput[]
    connectOrCreate?: PozoRecursoCreateOrConnectWithoutTipoRecursoInput | PozoRecursoCreateOrConnectWithoutTipoRecursoInput[]
    createMany?: PozoRecursoCreateManyTipoRecursoInputEnvelope
    connect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
  }

  export type ProduccionRecursoUncheckedCreateNestedManyWithoutTipoRecursoInput = {
    create?: XOR<ProduccionRecursoCreateWithoutTipoRecursoInput, ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput> | ProduccionRecursoCreateWithoutTipoRecursoInput[] | ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput[]
    connectOrCreate?: ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput | ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput[]
    createMany?: ProduccionRecursoCreateManyTipoRecursoInputEnvelope
    connect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
  }

  export type PozoRecursoUncheckedCreateNestedManyWithoutTipoRecursoInput = {
    create?: XOR<PozoRecursoCreateWithoutTipoRecursoInput, PozoRecursoUncheckedCreateWithoutTipoRecursoInput> | PozoRecursoCreateWithoutTipoRecursoInput[] | PozoRecursoUncheckedCreateWithoutTipoRecursoInput[]
    connectOrCreate?: PozoRecursoCreateOrConnectWithoutTipoRecursoInput | PozoRecursoCreateOrConnectWithoutTipoRecursoInput[]
    createMany?: PozoRecursoCreateManyTipoRecursoInputEnvelope
    connect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
  }

  export type ProduccionRecursoUpdateManyWithoutTipoRecursoNestedInput = {
    create?: XOR<ProduccionRecursoCreateWithoutTipoRecursoInput, ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput> | ProduccionRecursoCreateWithoutTipoRecursoInput[] | ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput[]
    connectOrCreate?: ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput | ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput[]
    upsert?: ProduccionRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput | ProduccionRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput[]
    createMany?: ProduccionRecursoCreateManyTipoRecursoInputEnvelope
    set?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    disconnect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    delete?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    connect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    update?: ProduccionRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput | ProduccionRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput[]
    updateMany?: ProduccionRecursoUpdateManyWithWhereWithoutTipoRecursoInput | ProduccionRecursoUpdateManyWithWhereWithoutTipoRecursoInput[]
    deleteMany?: ProduccionRecursoScalarWhereInput | ProduccionRecursoScalarWhereInput[]
  }

  export type PozoRecursoUpdateManyWithoutTipoRecursoNestedInput = {
    create?: XOR<PozoRecursoCreateWithoutTipoRecursoInput, PozoRecursoUncheckedCreateWithoutTipoRecursoInput> | PozoRecursoCreateWithoutTipoRecursoInput[] | PozoRecursoUncheckedCreateWithoutTipoRecursoInput[]
    connectOrCreate?: PozoRecursoCreateOrConnectWithoutTipoRecursoInput | PozoRecursoCreateOrConnectWithoutTipoRecursoInput[]
    upsert?: PozoRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput | PozoRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput[]
    createMany?: PozoRecursoCreateManyTipoRecursoInputEnvelope
    set?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    disconnect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    delete?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    connect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    update?: PozoRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput | PozoRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput[]
    updateMany?: PozoRecursoUpdateManyWithWhereWithoutTipoRecursoInput | PozoRecursoUpdateManyWithWhereWithoutTipoRecursoInput[]
    deleteMany?: PozoRecursoScalarWhereInput | PozoRecursoScalarWhereInput[]
  }

  export type ProduccionRecursoUncheckedUpdateManyWithoutTipoRecursoNestedInput = {
    create?: XOR<ProduccionRecursoCreateWithoutTipoRecursoInput, ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput> | ProduccionRecursoCreateWithoutTipoRecursoInput[] | ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput[]
    connectOrCreate?: ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput | ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput[]
    upsert?: ProduccionRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput | ProduccionRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput[]
    createMany?: ProduccionRecursoCreateManyTipoRecursoInputEnvelope
    set?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    disconnect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    delete?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    connect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    update?: ProduccionRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput | ProduccionRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput[]
    updateMany?: ProduccionRecursoUpdateManyWithWhereWithoutTipoRecursoInput | ProduccionRecursoUpdateManyWithWhereWithoutTipoRecursoInput[]
    deleteMany?: ProduccionRecursoScalarWhereInput | ProduccionRecursoScalarWhereInput[]
  }

  export type PozoRecursoUncheckedUpdateManyWithoutTipoRecursoNestedInput = {
    create?: XOR<PozoRecursoCreateWithoutTipoRecursoInput, PozoRecursoUncheckedCreateWithoutTipoRecursoInput> | PozoRecursoCreateWithoutTipoRecursoInput[] | PozoRecursoUncheckedCreateWithoutTipoRecursoInput[]
    connectOrCreate?: PozoRecursoCreateOrConnectWithoutTipoRecursoInput | PozoRecursoCreateOrConnectWithoutTipoRecursoInput[]
    upsert?: PozoRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput | PozoRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput[]
    createMany?: PozoRecursoCreateManyTipoRecursoInputEnvelope
    set?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    disconnect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    delete?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    connect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    update?: PozoRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput | PozoRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput[]
    updateMany?: PozoRecursoUpdateManyWithWhereWithoutTipoRecursoInput | PozoRecursoUpdateManyWithWhereWithoutTipoRecursoInput[]
    deleteMany?: PozoRecursoScalarWhereInput | PozoRecursoScalarWhereInput[]
  }

  export type ProduccionRecursoCreateNestedManyWithoutFluidoInput = {
    create?: XOR<ProduccionRecursoCreateWithoutFluidoInput, ProduccionRecursoUncheckedCreateWithoutFluidoInput> | ProduccionRecursoCreateWithoutFluidoInput[] | ProduccionRecursoUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionRecursoCreateOrConnectWithoutFluidoInput | ProduccionRecursoCreateOrConnectWithoutFluidoInput[]
    createMany?: ProduccionRecursoCreateManyFluidoInputEnvelope
    connect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
  }

  export type ProduccionAreaCreateNestedManyWithoutFluidoInput = {
    create?: XOR<ProduccionAreaCreateWithoutFluidoInput, ProduccionAreaUncheckedCreateWithoutFluidoInput> | ProduccionAreaCreateWithoutFluidoInput[] | ProduccionAreaUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionAreaCreateOrConnectWithoutFluidoInput | ProduccionAreaCreateOrConnectWithoutFluidoInput[]
    createMany?: ProduccionAreaCreateManyFluidoInputEnvelope
    connect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
  }

  export type ProduccionEmpresaCreateNestedManyWithoutFluidoInput = {
    create?: XOR<ProduccionEmpresaCreateWithoutFluidoInput, ProduccionEmpresaUncheckedCreateWithoutFluidoInput> | ProduccionEmpresaCreateWithoutFluidoInput[] | ProduccionEmpresaUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionEmpresaCreateOrConnectWithoutFluidoInput | ProduccionEmpresaCreateOrConnectWithoutFluidoInput[]
    createMany?: ProduccionEmpresaCreateManyFluidoInputEnvelope
    connect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
  }

  export type PozoRecursoCreateNestedManyWithoutFluidoInput = {
    create?: XOR<PozoRecursoCreateWithoutFluidoInput, PozoRecursoUncheckedCreateWithoutFluidoInput> | PozoRecursoCreateWithoutFluidoInput[] | PozoRecursoUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: PozoRecursoCreateOrConnectWithoutFluidoInput | PozoRecursoCreateOrConnectWithoutFluidoInput[]
    createMany?: PozoRecursoCreateManyFluidoInputEnvelope
    connect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
  }

  export type ProduccionRecursoUncheckedCreateNestedManyWithoutFluidoInput = {
    create?: XOR<ProduccionRecursoCreateWithoutFluidoInput, ProduccionRecursoUncheckedCreateWithoutFluidoInput> | ProduccionRecursoCreateWithoutFluidoInput[] | ProduccionRecursoUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionRecursoCreateOrConnectWithoutFluidoInput | ProduccionRecursoCreateOrConnectWithoutFluidoInput[]
    createMany?: ProduccionRecursoCreateManyFluidoInputEnvelope
    connect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
  }

  export type ProduccionAreaUncheckedCreateNestedManyWithoutFluidoInput = {
    create?: XOR<ProduccionAreaCreateWithoutFluidoInput, ProduccionAreaUncheckedCreateWithoutFluidoInput> | ProduccionAreaCreateWithoutFluidoInput[] | ProduccionAreaUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionAreaCreateOrConnectWithoutFluidoInput | ProduccionAreaCreateOrConnectWithoutFluidoInput[]
    createMany?: ProduccionAreaCreateManyFluidoInputEnvelope
    connect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
  }

  export type ProduccionEmpresaUncheckedCreateNestedManyWithoutFluidoInput = {
    create?: XOR<ProduccionEmpresaCreateWithoutFluidoInput, ProduccionEmpresaUncheckedCreateWithoutFluidoInput> | ProduccionEmpresaCreateWithoutFluidoInput[] | ProduccionEmpresaUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionEmpresaCreateOrConnectWithoutFluidoInput | ProduccionEmpresaCreateOrConnectWithoutFluidoInput[]
    createMany?: ProduccionEmpresaCreateManyFluidoInputEnvelope
    connect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
  }

  export type PozoRecursoUncheckedCreateNestedManyWithoutFluidoInput = {
    create?: XOR<PozoRecursoCreateWithoutFluidoInput, PozoRecursoUncheckedCreateWithoutFluidoInput> | PozoRecursoCreateWithoutFluidoInput[] | PozoRecursoUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: PozoRecursoCreateOrConnectWithoutFluidoInput | PozoRecursoCreateOrConnectWithoutFluidoInput[]
    createMany?: PozoRecursoCreateManyFluidoInputEnvelope
    connect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
  }

  export type ProduccionRecursoUpdateManyWithoutFluidoNestedInput = {
    create?: XOR<ProduccionRecursoCreateWithoutFluidoInput, ProduccionRecursoUncheckedCreateWithoutFluidoInput> | ProduccionRecursoCreateWithoutFluidoInput[] | ProduccionRecursoUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionRecursoCreateOrConnectWithoutFluidoInput | ProduccionRecursoCreateOrConnectWithoutFluidoInput[]
    upsert?: ProduccionRecursoUpsertWithWhereUniqueWithoutFluidoInput | ProduccionRecursoUpsertWithWhereUniqueWithoutFluidoInput[]
    createMany?: ProduccionRecursoCreateManyFluidoInputEnvelope
    set?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    disconnect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    delete?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    connect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    update?: ProduccionRecursoUpdateWithWhereUniqueWithoutFluidoInput | ProduccionRecursoUpdateWithWhereUniqueWithoutFluidoInput[]
    updateMany?: ProduccionRecursoUpdateManyWithWhereWithoutFluidoInput | ProduccionRecursoUpdateManyWithWhereWithoutFluidoInput[]
    deleteMany?: ProduccionRecursoScalarWhereInput | ProduccionRecursoScalarWhereInput[]
  }

  export type ProduccionAreaUpdateManyWithoutFluidoNestedInput = {
    create?: XOR<ProduccionAreaCreateWithoutFluidoInput, ProduccionAreaUncheckedCreateWithoutFluidoInput> | ProduccionAreaCreateWithoutFluidoInput[] | ProduccionAreaUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionAreaCreateOrConnectWithoutFluidoInput | ProduccionAreaCreateOrConnectWithoutFluidoInput[]
    upsert?: ProduccionAreaUpsertWithWhereUniqueWithoutFluidoInput | ProduccionAreaUpsertWithWhereUniqueWithoutFluidoInput[]
    createMany?: ProduccionAreaCreateManyFluidoInputEnvelope
    set?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    disconnect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    delete?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    connect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    update?: ProduccionAreaUpdateWithWhereUniqueWithoutFluidoInput | ProduccionAreaUpdateWithWhereUniqueWithoutFluidoInput[]
    updateMany?: ProduccionAreaUpdateManyWithWhereWithoutFluidoInput | ProduccionAreaUpdateManyWithWhereWithoutFluidoInput[]
    deleteMany?: ProduccionAreaScalarWhereInput | ProduccionAreaScalarWhereInput[]
  }

  export type ProduccionEmpresaUpdateManyWithoutFluidoNestedInput = {
    create?: XOR<ProduccionEmpresaCreateWithoutFluidoInput, ProduccionEmpresaUncheckedCreateWithoutFluidoInput> | ProduccionEmpresaCreateWithoutFluidoInput[] | ProduccionEmpresaUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionEmpresaCreateOrConnectWithoutFluidoInput | ProduccionEmpresaCreateOrConnectWithoutFluidoInput[]
    upsert?: ProduccionEmpresaUpsertWithWhereUniqueWithoutFluidoInput | ProduccionEmpresaUpsertWithWhereUniqueWithoutFluidoInput[]
    createMany?: ProduccionEmpresaCreateManyFluidoInputEnvelope
    set?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    disconnect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    delete?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    connect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    update?: ProduccionEmpresaUpdateWithWhereUniqueWithoutFluidoInput | ProduccionEmpresaUpdateWithWhereUniqueWithoutFluidoInput[]
    updateMany?: ProduccionEmpresaUpdateManyWithWhereWithoutFluidoInput | ProduccionEmpresaUpdateManyWithWhereWithoutFluidoInput[]
    deleteMany?: ProduccionEmpresaScalarWhereInput | ProduccionEmpresaScalarWhereInput[]
  }

  export type PozoRecursoUpdateManyWithoutFluidoNestedInput = {
    create?: XOR<PozoRecursoCreateWithoutFluidoInput, PozoRecursoUncheckedCreateWithoutFluidoInput> | PozoRecursoCreateWithoutFluidoInput[] | PozoRecursoUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: PozoRecursoCreateOrConnectWithoutFluidoInput | PozoRecursoCreateOrConnectWithoutFluidoInput[]
    upsert?: PozoRecursoUpsertWithWhereUniqueWithoutFluidoInput | PozoRecursoUpsertWithWhereUniqueWithoutFluidoInput[]
    createMany?: PozoRecursoCreateManyFluidoInputEnvelope
    set?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    disconnect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    delete?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    connect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    update?: PozoRecursoUpdateWithWhereUniqueWithoutFluidoInput | PozoRecursoUpdateWithWhereUniqueWithoutFluidoInput[]
    updateMany?: PozoRecursoUpdateManyWithWhereWithoutFluidoInput | PozoRecursoUpdateManyWithWhereWithoutFluidoInput[]
    deleteMany?: PozoRecursoScalarWhereInput | PozoRecursoScalarWhereInput[]
  }

  export type ProduccionRecursoUncheckedUpdateManyWithoutFluidoNestedInput = {
    create?: XOR<ProduccionRecursoCreateWithoutFluidoInput, ProduccionRecursoUncheckedCreateWithoutFluidoInput> | ProduccionRecursoCreateWithoutFluidoInput[] | ProduccionRecursoUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionRecursoCreateOrConnectWithoutFluidoInput | ProduccionRecursoCreateOrConnectWithoutFluidoInput[]
    upsert?: ProduccionRecursoUpsertWithWhereUniqueWithoutFluidoInput | ProduccionRecursoUpsertWithWhereUniqueWithoutFluidoInput[]
    createMany?: ProduccionRecursoCreateManyFluidoInputEnvelope
    set?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    disconnect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    delete?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    connect?: ProduccionRecursoWhereUniqueInput | ProduccionRecursoWhereUniqueInput[]
    update?: ProduccionRecursoUpdateWithWhereUniqueWithoutFluidoInput | ProduccionRecursoUpdateWithWhereUniqueWithoutFluidoInput[]
    updateMany?: ProduccionRecursoUpdateManyWithWhereWithoutFluidoInput | ProduccionRecursoUpdateManyWithWhereWithoutFluidoInput[]
    deleteMany?: ProduccionRecursoScalarWhereInput | ProduccionRecursoScalarWhereInput[]
  }

  export type ProduccionAreaUncheckedUpdateManyWithoutFluidoNestedInput = {
    create?: XOR<ProduccionAreaCreateWithoutFluidoInput, ProduccionAreaUncheckedCreateWithoutFluidoInput> | ProduccionAreaCreateWithoutFluidoInput[] | ProduccionAreaUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionAreaCreateOrConnectWithoutFluidoInput | ProduccionAreaCreateOrConnectWithoutFluidoInput[]
    upsert?: ProduccionAreaUpsertWithWhereUniqueWithoutFluidoInput | ProduccionAreaUpsertWithWhereUniqueWithoutFluidoInput[]
    createMany?: ProduccionAreaCreateManyFluidoInputEnvelope
    set?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    disconnect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    delete?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    connect?: ProduccionAreaWhereUniqueInput | ProduccionAreaWhereUniqueInput[]
    update?: ProduccionAreaUpdateWithWhereUniqueWithoutFluidoInput | ProduccionAreaUpdateWithWhereUniqueWithoutFluidoInput[]
    updateMany?: ProduccionAreaUpdateManyWithWhereWithoutFluidoInput | ProduccionAreaUpdateManyWithWhereWithoutFluidoInput[]
    deleteMany?: ProduccionAreaScalarWhereInput | ProduccionAreaScalarWhereInput[]
  }

  export type ProduccionEmpresaUncheckedUpdateManyWithoutFluidoNestedInput = {
    create?: XOR<ProduccionEmpresaCreateWithoutFluidoInput, ProduccionEmpresaUncheckedCreateWithoutFluidoInput> | ProduccionEmpresaCreateWithoutFluidoInput[] | ProduccionEmpresaUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: ProduccionEmpresaCreateOrConnectWithoutFluidoInput | ProduccionEmpresaCreateOrConnectWithoutFluidoInput[]
    upsert?: ProduccionEmpresaUpsertWithWhereUniqueWithoutFluidoInput | ProduccionEmpresaUpsertWithWhereUniqueWithoutFluidoInput[]
    createMany?: ProduccionEmpresaCreateManyFluidoInputEnvelope
    set?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    disconnect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    delete?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    connect?: ProduccionEmpresaWhereUniqueInput | ProduccionEmpresaWhereUniqueInput[]
    update?: ProduccionEmpresaUpdateWithWhereUniqueWithoutFluidoInput | ProduccionEmpresaUpdateWithWhereUniqueWithoutFluidoInput[]
    updateMany?: ProduccionEmpresaUpdateManyWithWhereWithoutFluidoInput | ProduccionEmpresaUpdateManyWithWhereWithoutFluidoInput[]
    deleteMany?: ProduccionEmpresaScalarWhereInput | ProduccionEmpresaScalarWhereInput[]
  }

  export type PozoRecursoUncheckedUpdateManyWithoutFluidoNestedInput = {
    create?: XOR<PozoRecursoCreateWithoutFluidoInput, PozoRecursoUncheckedCreateWithoutFluidoInput> | PozoRecursoCreateWithoutFluidoInput[] | PozoRecursoUncheckedCreateWithoutFluidoInput[]
    connectOrCreate?: PozoRecursoCreateOrConnectWithoutFluidoInput | PozoRecursoCreateOrConnectWithoutFluidoInput[]
    upsert?: PozoRecursoUpsertWithWhereUniqueWithoutFluidoInput | PozoRecursoUpsertWithWhereUniqueWithoutFluidoInput[]
    createMany?: PozoRecursoCreateManyFluidoInputEnvelope
    set?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    disconnect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    delete?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    connect?: PozoRecursoWhereUniqueInput | PozoRecursoWhereUniqueInput[]
    update?: PozoRecursoUpdateWithWhereUniqueWithoutFluidoInput | PozoRecursoUpdateWithWhereUniqueWithoutFluidoInput[]
    updateMany?: PozoRecursoUpdateManyWithWhereWithoutFluidoInput | PozoRecursoUpdateManyWithWhereWithoutFluidoInput[]
    deleteMany?: PozoRecursoScalarWhereInput | PozoRecursoScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type AreaCreateWithoutEmpresaInput = {
    nombreArea: string
    comentario?: string | null
    cuenca: CuencaCreateNestedOneWithoutAreasInput
    producciones?: ProduccionAreaCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutEmpresaInput = {
    id?: number
    nombreArea: string
    cuencaId: number
    comentario?: string | null
    producciones?: ProduccionAreaUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutEmpresaInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutEmpresaInput, AreaUncheckedCreateWithoutEmpresaInput>
  }

  export type AreaCreateManyEmpresaInputEnvelope = {
    data: AreaCreateManyEmpresaInput | AreaCreateManyEmpresaInput[]
  }

  export type ProduccionEmpresaCreateWithoutEmpresaInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluido: FluidoCreateNestedOneWithoutProduccionEmpresaInput
  }

  export type ProduccionEmpresaUncheckedCreateWithoutEmpresaInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
  }

  export type ProduccionEmpresaCreateOrConnectWithoutEmpresaInput = {
    where: ProduccionEmpresaWhereUniqueInput
    create: XOR<ProduccionEmpresaCreateWithoutEmpresaInput, ProduccionEmpresaUncheckedCreateWithoutEmpresaInput>
  }

  export type ProduccionEmpresaCreateManyEmpresaInputEnvelope = {
    data: ProduccionEmpresaCreateManyEmpresaInput | ProduccionEmpresaCreateManyEmpresaInput[]
  }

  export type AreaUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutEmpresaInput, AreaUncheckedUpdateWithoutEmpresaInput>
    create: XOR<AreaCreateWithoutEmpresaInput, AreaUncheckedCreateWithoutEmpresaInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutEmpresaInput, AreaUncheckedUpdateWithoutEmpresaInput>
  }

  export type AreaUpdateManyWithWhereWithoutEmpresaInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: IntFilter<"Area"> | number
    nombreArea?: StringFilter<"Area"> | string
    cuencaId?: IntFilter<"Area"> | number
    empresaId?: IntFilter<"Area"> | number
    comentario?: StringNullableFilter<"Area"> | string | null
  }

  export type ProduccionEmpresaUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: ProduccionEmpresaWhereUniqueInput
    update: XOR<ProduccionEmpresaUpdateWithoutEmpresaInput, ProduccionEmpresaUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ProduccionEmpresaCreateWithoutEmpresaInput, ProduccionEmpresaUncheckedCreateWithoutEmpresaInput>
  }

  export type ProduccionEmpresaUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: ProduccionEmpresaWhereUniqueInput
    data: XOR<ProduccionEmpresaUpdateWithoutEmpresaInput, ProduccionEmpresaUncheckedUpdateWithoutEmpresaInput>
  }

  export type ProduccionEmpresaUpdateManyWithWhereWithoutEmpresaInput = {
    where: ProduccionEmpresaScalarWhereInput
    data: XOR<ProduccionEmpresaUpdateManyMutationInput, ProduccionEmpresaUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type ProduccionEmpresaScalarWhereInput = {
    AND?: ProduccionEmpresaScalarWhereInput | ProduccionEmpresaScalarWhereInput[]
    OR?: ProduccionEmpresaScalarWhereInput[]
    NOT?: ProduccionEmpresaScalarWhereInput | ProduccionEmpresaScalarWhereInput[]
    id?: IntFilter<"ProduccionEmpresa"> | number
    cantidad?: IntFilter<"ProduccionEmpresa"> | number
    mes?: IntNullableFilter<"ProduccionEmpresa"> | number | null
    anio?: IntFilter<"ProduccionEmpresa"> | number
    observaciones?: StringNullableFilter<"ProduccionEmpresa"> | string | null
    fluidoId?: IntFilter<"ProduccionEmpresa"> | number
    empresaId?: IntFilter<"ProduccionEmpresa"> | number
  }

  export type CuencaCreateWithoutAreasInput = {
    nombreCuenca: string
    comentario?: string | null
  }

  export type CuencaUncheckedCreateWithoutAreasInput = {
    id?: number
    nombreCuenca: string
    comentario?: string | null
  }

  export type CuencaCreateOrConnectWithoutAreasInput = {
    where: CuencaWhereUniqueInput
    create: XOR<CuencaCreateWithoutAreasInput, CuencaUncheckedCreateWithoutAreasInput>
  }

  export type EmpresaCreateWithoutAreasInput = {
    nombreEmpresa: string
    comentario?: string | null
    producciones?: ProduccionEmpresaCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutAreasInput = {
    id?: number
    nombreEmpresa: string
    comentario?: string | null
    producciones?: ProduccionEmpresaUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutAreasInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutAreasInput, EmpresaUncheckedCreateWithoutAreasInput>
  }

  export type ProduccionAreaCreateWithoutAreaInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluido: FluidoCreateNestedOneWithoutProduccionAreaInput
  }

  export type ProduccionAreaUncheckedCreateWithoutAreaInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
  }

  export type ProduccionAreaCreateOrConnectWithoutAreaInput = {
    where: ProduccionAreaWhereUniqueInput
    create: XOR<ProduccionAreaCreateWithoutAreaInput, ProduccionAreaUncheckedCreateWithoutAreaInput>
  }

  export type ProduccionAreaCreateManyAreaInputEnvelope = {
    data: ProduccionAreaCreateManyAreaInput | ProduccionAreaCreateManyAreaInput[]
  }

  export type CuencaUpsertWithoutAreasInput = {
    update: XOR<CuencaUpdateWithoutAreasInput, CuencaUncheckedUpdateWithoutAreasInput>
    create: XOR<CuencaCreateWithoutAreasInput, CuencaUncheckedCreateWithoutAreasInput>
    where?: CuencaWhereInput
  }

  export type CuencaUpdateToOneWithWhereWithoutAreasInput = {
    where?: CuencaWhereInput
    data: XOR<CuencaUpdateWithoutAreasInput, CuencaUncheckedUpdateWithoutAreasInput>
  }

  export type CuencaUpdateWithoutAreasInput = {
    nombreCuenca?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CuencaUncheckedUpdateWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreCuenca?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpresaUpsertWithoutAreasInput = {
    update: XOR<EmpresaUpdateWithoutAreasInput, EmpresaUncheckedUpdateWithoutAreasInput>
    create: XOR<EmpresaCreateWithoutAreasInput, EmpresaUncheckedCreateWithoutAreasInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutAreasInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutAreasInput, EmpresaUncheckedUpdateWithoutAreasInput>
  }

  export type EmpresaUpdateWithoutAreasInput = {
    nombreEmpresa?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    producciones?: ProduccionEmpresaUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreEmpresa?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    producciones?: ProduccionEmpresaUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type ProduccionAreaUpsertWithWhereUniqueWithoutAreaInput = {
    where: ProduccionAreaWhereUniqueInput
    update: XOR<ProduccionAreaUpdateWithoutAreaInput, ProduccionAreaUncheckedUpdateWithoutAreaInput>
    create: XOR<ProduccionAreaCreateWithoutAreaInput, ProduccionAreaUncheckedCreateWithoutAreaInput>
  }

  export type ProduccionAreaUpdateWithWhereUniqueWithoutAreaInput = {
    where: ProduccionAreaWhereUniqueInput
    data: XOR<ProduccionAreaUpdateWithoutAreaInput, ProduccionAreaUncheckedUpdateWithoutAreaInput>
  }

  export type ProduccionAreaUpdateManyWithWhereWithoutAreaInput = {
    where: ProduccionAreaScalarWhereInput
    data: XOR<ProduccionAreaUpdateManyMutationInput, ProduccionAreaUncheckedUpdateManyWithoutAreaInput>
  }

  export type ProduccionAreaScalarWhereInput = {
    AND?: ProduccionAreaScalarWhereInput | ProduccionAreaScalarWhereInput[]
    OR?: ProduccionAreaScalarWhereInput[]
    NOT?: ProduccionAreaScalarWhereInput | ProduccionAreaScalarWhereInput[]
    id?: IntFilter<"ProduccionArea"> | number
    cantidad?: IntFilter<"ProduccionArea"> | number
    mes?: IntNullableFilter<"ProduccionArea"> | number | null
    anio?: IntFilter<"ProduccionArea"> | number
    observaciones?: StringNullableFilter<"ProduccionArea"> | string | null
    fluidoId?: IntFilter<"ProduccionArea"> | number
    areaId?: IntFilter<"ProduccionArea"> | number
  }

  export type AreaCreateWithoutCuencaInput = {
    nombreArea: string
    comentario?: string | null
    empresa: EmpresaCreateNestedOneWithoutAreasInput
    producciones?: ProduccionAreaCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutCuencaInput = {
    id?: number
    nombreArea: string
    empresaId: number
    comentario?: string | null
    producciones?: ProduccionAreaUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutCuencaInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutCuencaInput, AreaUncheckedCreateWithoutCuencaInput>
  }

  export type AreaCreateManyCuencaInputEnvelope = {
    data: AreaCreateManyCuencaInput | AreaCreateManyCuencaInput[]
  }

  export type AreaUpsertWithWhereUniqueWithoutCuencaInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutCuencaInput, AreaUncheckedUpdateWithoutCuencaInput>
    create: XOR<AreaCreateWithoutCuencaInput, AreaUncheckedCreateWithoutCuencaInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutCuencaInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutCuencaInput, AreaUncheckedUpdateWithoutCuencaInput>
  }

  export type AreaUpdateManyWithWhereWithoutCuencaInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutCuencaInput>
  }

  export type TipoRecursoCreateWithoutPozosInput = {
    tipoRecurso: string
    subTipoRecurso?: string | null
    comentario?: string | null
    produccion?: ProduccionRecursoCreateNestedManyWithoutTipoRecursoInput
  }

  export type TipoRecursoUncheckedCreateWithoutPozosInput = {
    id?: number
    tipoRecurso: string
    subTipoRecurso?: string | null
    comentario?: string | null
    produccion?: ProduccionRecursoUncheckedCreateNestedManyWithoutTipoRecursoInput
  }

  export type TipoRecursoCreateOrConnectWithoutPozosInput = {
    where: TipoRecursoWhereUniqueInput
    create: XOR<TipoRecursoCreateWithoutPozosInput, TipoRecursoUncheckedCreateWithoutPozosInput>
  }

  export type FluidoCreateWithoutPozosInput = {
    tipoFluido: string
    comentario?: string | null
    produccionRecurso?: ProduccionRecursoCreateNestedManyWithoutFluidoInput
    produccionArea?: ProduccionAreaCreateNestedManyWithoutFluidoInput
    produccionEmpresa?: ProduccionEmpresaCreateNestedManyWithoutFluidoInput
  }

  export type FluidoUncheckedCreateWithoutPozosInput = {
    id?: number
    tipoFluido: string
    comentario?: string | null
    produccionRecurso?: ProduccionRecursoUncheckedCreateNestedManyWithoutFluidoInput
    produccionArea?: ProduccionAreaUncheckedCreateNestedManyWithoutFluidoInput
    produccionEmpresa?: ProduccionEmpresaUncheckedCreateNestedManyWithoutFluidoInput
  }

  export type FluidoCreateOrConnectWithoutPozosInput = {
    where: FluidoWhereUniqueInput
    create: XOR<FluidoCreateWithoutPozosInput, FluidoUncheckedCreateWithoutPozosInput>
  }

  export type TipoRecursoUpsertWithoutPozosInput = {
    update: XOR<TipoRecursoUpdateWithoutPozosInput, TipoRecursoUncheckedUpdateWithoutPozosInput>
    create: XOR<TipoRecursoCreateWithoutPozosInput, TipoRecursoUncheckedCreateWithoutPozosInput>
    where?: TipoRecursoWhereInput
  }

  export type TipoRecursoUpdateToOneWithWhereWithoutPozosInput = {
    where?: TipoRecursoWhereInput
    data: XOR<TipoRecursoUpdateWithoutPozosInput, TipoRecursoUncheckedUpdateWithoutPozosInput>
  }

  export type TipoRecursoUpdateWithoutPozosInput = {
    tipoRecurso?: StringFieldUpdateOperationsInput | string
    subTipoRecurso?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccion?: ProduccionRecursoUpdateManyWithoutTipoRecursoNestedInput
  }

  export type TipoRecursoUncheckedUpdateWithoutPozosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoRecurso?: StringFieldUpdateOperationsInput | string
    subTipoRecurso?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccion?: ProduccionRecursoUncheckedUpdateManyWithoutTipoRecursoNestedInput
  }

  export type FluidoUpsertWithoutPozosInput = {
    update: XOR<FluidoUpdateWithoutPozosInput, FluidoUncheckedUpdateWithoutPozosInput>
    create: XOR<FluidoCreateWithoutPozosInput, FluidoUncheckedCreateWithoutPozosInput>
    where?: FluidoWhereInput
  }

  export type FluidoUpdateToOneWithWhereWithoutPozosInput = {
    where?: FluidoWhereInput
    data: XOR<FluidoUpdateWithoutPozosInput, FluidoUncheckedUpdateWithoutPozosInput>
  }

  export type FluidoUpdateWithoutPozosInput = {
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionRecurso?: ProduccionRecursoUpdateManyWithoutFluidoNestedInput
    produccionArea?: ProduccionAreaUpdateManyWithoutFluidoNestedInput
    produccionEmpresa?: ProduccionEmpresaUpdateManyWithoutFluidoNestedInput
  }

  export type FluidoUncheckedUpdateWithoutPozosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionRecurso?: ProduccionRecursoUncheckedUpdateManyWithoutFluidoNestedInput
    produccionArea?: ProduccionAreaUncheckedUpdateManyWithoutFluidoNestedInput
    produccionEmpresa?: ProduccionEmpresaUncheckedUpdateManyWithoutFluidoNestedInput
  }

  export type PozoSistemaCreateWithoutSistemaInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
  }

  export type PozoSistemaUncheckedCreateWithoutSistemaInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
  }

  export type PozoSistemaCreateOrConnectWithoutSistemaInput = {
    where: PozoSistemaWhereUniqueInput
    create: XOR<PozoSistemaCreateWithoutSistemaInput, PozoSistemaUncheckedCreateWithoutSistemaInput>
  }

  export type PozoSistemaCreateManySistemaInputEnvelope = {
    data: PozoSistemaCreateManySistemaInput | PozoSistemaCreateManySistemaInput[]
  }

  export type PozoSistemaUpsertWithWhereUniqueWithoutSistemaInput = {
    where: PozoSistemaWhereUniqueInput
    update: XOR<PozoSistemaUpdateWithoutSistemaInput, PozoSistemaUncheckedUpdateWithoutSistemaInput>
    create: XOR<PozoSistemaCreateWithoutSistemaInput, PozoSistemaUncheckedCreateWithoutSistemaInput>
  }

  export type PozoSistemaUpdateWithWhereUniqueWithoutSistemaInput = {
    where: PozoSistemaWhereUniqueInput
    data: XOR<PozoSistemaUpdateWithoutSistemaInput, PozoSistemaUncheckedUpdateWithoutSistemaInput>
  }

  export type PozoSistemaUpdateManyWithWhereWithoutSistemaInput = {
    where: PozoSistemaScalarWhereInput
    data: XOR<PozoSistemaUpdateManyMutationInput, PozoSistemaUncheckedUpdateManyWithoutSistemaInput>
  }

  export type PozoSistemaScalarWhereInput = {
    AND?: PozoSistemaScalarWhereInput | PozoSistemaScalarWhereInput[]
    OR?: PozoSistemaScalarWhereInput[]
    NOT?: PozoSistemaScalarWhereInput | PozoSistemaScalarWhereInput[]
    id?: IntFilter<"PozoSistema"> | number
    cantidad?: IntFilter<"PozoSistema"> | number
    mes?: IntNullableFilter<"PozoSistema"> | number | null
    anio?: IntFilter<"PozoSistema"> | number
    observaciones?: StringNullableFilter<"PozoSistema"> | string | null
    sistemaId?: IntFilter<"PozoSistema"> | number
  }

  export type SistemaCreateWithoutPozosInput = {
    nombreSistema: string
    sigla: string
  }

  export type SistemaUncheckedCreateWithoutPozosInput = {
    id?: number
    nombreSistema: string
    sigla: string
  }

  export type SistemaCreateOrConnectWithoutPozosInput = {
    where: SistemaWhereUniqueInput
    create: XOR<SistemaCreateWithoutPozosInput, SistemaUncheckedCreateWithoutPozosInput>
  }

  export type SistemaUpsertWithoutPozosInput = {
    update: XOR<SistemaUpdateWithoutPozosInput, SistemaUncheckedUpdateWithoutPozosInput>
    create: XOR<SistemaCreateWithoutPozosInput, SistemaUncheckedCreateWithoutPozosInput>
    where?: SistemaWhereInput
  }

  export type SistemaUpdateToOneWithWhereWithoutPozosInput = {
    where?: SistemaWhereInput
    data: XOR<SistemaUpdateWithoutPozosInput, SistemaUncheckedUpdateWithoutPozosInput>
  }

  export type SistemaUpdateWithoutPozosInput = {
    nombreSistema?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type SistemaUncheckedUpdateWithoutPozosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreSistema?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type FluidoCreateWithoutProduccionEmpresaInput = {
    tipoFluido: string
    comentario?: string | null
    produccionRecurso?: ProduccionRecursoCreateNestedManyWithoutFluidoInput
    produccionArea?: ProduccionAreaCreateNestedManyWithoutFluidoInput
    pozos?: PozoRecursoCreateNestedManyWithoutFluidoInput
  }

  export type FluidoUncheckedCreateWithoutProduccionEmpresaInput = {
    id?: number
    tipoFluido: string
    comentario?: string | null
    produccionRecurso?: ProduccionRecursoUncheckedCreateNestedManyWithoutFluidoInput
    produccionArea?: ProduccionAreaUncheckedCreateNestedManyWithoutFluidoInput
    pozos?: PozoRecursoUncheckedCreateNestedManyWithoutFluidoInput
  }

  export type FluidoCreateOrConnectWithoutProduccionEmpresaInput = {
    where: FluidoWhereUniqueInput
    create: XOR<FluidoCreateWithoutProduccionEmpresaInput, FluidoUncheckedCreateWithoutProduccionEmpresaInput>
  }

  export type EmpresaCreateWithoutProduccionesInput = {
    nombreEmpresa: string
    comentario?: string | null
    areas?: AreaCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutProduccionesInput = {
    id?: number
    nombreEmpresa: string
    comentario?: string | null
    areas?: AreaUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutProduccionesInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutProduccionesInput, EmpresaUncheckedCreateWithoutProduccionesInput>
  }

  export type FluidoUpsertWithoutProduccionEmpresaInput = {
    update: XOR<FluidoUpdateWithoutProduccionEmpresaInput, FluidoUncheckedUpdateWithoutProduccionEmpresaInput>
    create: XOR<FluidoCreateWithoutProduccionEmpresaInput, FluidoUncheckedCreateWithoutProduccionEmpresaInput>
    where?: FluidoWhereInput
  }

  export type FluidoUpdateToOneWithWhereWithoutProduccionEmpresaInput = {
    where?: FluidoWhereInput
    data: XOR<FluidoUpdateWithoutProduccionEmpresaInput, FluidoUncheckedUpdateWithoutProduccionEmpresaInput>
  }

  export type FluidoUpdateWithoutProduccionEmpresaInput = {
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionRecurso?: ProduccionRecursoUpdateManyWithoutFluidoNestedInput
    produccionArea?: ProduccionAreaUpdateManyWithoutFluidoNestedInput
    pozos?: PozoRecursoUpdateManyWithoutFluidoNestedInput
  }

  export type FluidoUncheckedUpdateWithoutProduccionEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionRecurso?: ProduccionRecursoUncheckedUpdateManyWithoutFluidoNestedInput
    produccionArea?: ProduccionAreaUncheckedUpdateManyWithoutFluidoNestedInput
    pozos?: PozoRecursoUncheckedUpdateManyWithoutFluidoNestedInput
  }

  export type EmpresaUpsertWithoutProduccionesInput = {
    update: XOR<EmpresaUpdateWithoutProduccionesInput, EmpresaUncheckedUpdateWithoutProduccionesInput>
    create: XOR<EmpresaCreateWithoutProduccionesInput, EmpresaUncheckedCreateWithoutProduccionesInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutProduccionesInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutProduccionesInput, EmpresaUncheckedUpdateWithoutProduccionesInput>
  }

  export type EmpresaUpdateWithoutProduccionesInput = {
    nombreEmpresa?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    areas?: AreaUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutProduccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreEmpresa?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    areas?: AreaUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type FluidoCreateWithoutProduccionRecursoInput = {
    tipoFluido: string
    comentario?: string | null
    produccionArea?: ProduccionAreaCreateNestedManyWithoutFluidoInput
    produccionEmpresa?: ProduccionEmpresaCreateNestedManyWithoutFluidoInput
    pozos?: PozoRecursoCreateNestedManyWithoutFluidoInput
  }

  export type FluidoUncheckedCreateWithoutProduccionRecursoInput = {
    id?: number
    tipoFluido: string
    comentario?: string | null
    produccionArea?: ProduccionAreaUncheckedCreateNestedManyWithoutFluidoInput
    produccionEmpresa?: ProduccionEmpresaUncheckedCreateNestedManyWithoutFluidoInput
    pozos?: PozoRecursoUncheckedCreateNestedManyWithoutFluidoInput
  }

  export type FluidoCreateOrConnectWithoutProduccionRecursoInput = {
    where: FluidoWhereUniqueInput
    create: XOR<FluidoCreateWithoutProduccionRecursoInput, FluidoUncheckedCreateWithoutProduccionRecursoInput>
  }

  export type TipoRecursoCreateWithoutProduccionInput = {
    tipoRecurso: string
    subTipoRecurso?: string | null
    comentario?: string | null
    pozos?: PozoRecursoCreateNestedManyWithoutTipoRecursoInput
  }

  export type TipoRecursoUncheckedCreateWithoutProduccionInput = {
    id?: number
    tipoRecurso: string
    subTipoRecurso?: string | null
    comentario?: string | null
    pozos?: PozoRecursoUncheckedCreateNestedManyWithoutTipoRecursoInput
  }

  export type TipoRecursoCreateOrConnectWithoutProduccionInput = {
    where: TipoRecursoWhereUniqueInput
    create: XOR<TipoRecursoCreateWithoutProduccionInput, TipoRecursoUncheckedCreateWithoutProduccionInput>
  }

  export type FluidoUpsertWithoutProduccionRecursoInput = {
    update: XOR<FluidoUpdateWithoutProduccionRecursoInput, FluidoUncheckedUpdateWithoutProduccionRecursoInput>
    create: XOR<FluidoCreateWithoutProduccionRecursoInput, FluidoUncheckedCreateWithoutProduccionRecursoInput>
    where?: FluidoWhereInput
  }

  export type FluidoUpdateToOneWithWhereWithoutProduccionRecursoInput = {
    where?: FluidoWhereInput
    data: XOR<FluidoUpdateWithoutProduccionRecursoInput, FluidoUncheckedUpdateWithoutProduccionRecursoInput>
  }

  export type FluidoUpdateWithoutProduccionRecursoInput = {
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionArea?: ProduccionAreaUpdateManyWithoutFluidoNestedInput
    produccionEmpresa?: ProduccionEmpresaUpdateManyWithoutFluidoNestedInput
    pozos?: PozoRecursoUpdateManyWithoutFluidoNestedInput
  }

  export type FluidoUncheckedUpdateWithoutProduccionRecursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionArea?: ProduccionAreaUncheckedUpdateManyWithoutFluidoNestedInput
    produccionEmpresa?: ProduccionEmpresaUncheckedUpdateManyWithoutFluidoNestedInput
    pozos?: PozoRecursoUncheckedUpdateManyWithoutFluidoNestedInput
  }

  export type TipoRecursoUpsertWithoutProduccionInput = {
    update: XOR<TipoRecursoUpdateWithoutProduccionInput, TipoRecursoUncheckedUpdateWithoutProduccionInput>
    create: XOR<TipoRecursoCreateWithoutProduccionInput, TipoRecursoUncheckedCreateWithoutProduccionInput>
    where?: TipoRecursoWhereInput
  }

  export type TipoRecursoUpdateToOneWithWhereWithoutProduccionInput = {
    where?: TipoRecursoWhereInput
    data: XOR<TipoRecursoUpdateWithoutProduccionInput, TipoRecursoUncheckedUpdateWithoutProduccionInput>
  }

  export type TipoRecursoUpdateWithoutProduccionInput = {
    tipoRecurso?: StringFieldUpdateOperationsInput | string
    subTipoRecurso?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    pozos?: PozoRecursoUpdateManyWithoutTipoRecursoNestedInput
  }

  export type TipoRecursoUncheckedUpdateWithoutProduccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoRecurso?: StringFieldUpdateOperationsInput | string
    subTipoRecurso?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    pozos?: PozoRecursoUncheckedUpdateManyWithoutTipoRecursoNestedInput
  }

  export type FluidoCreateWithoutProduccionAreaInput = {
    tipoFluido: string
    comentario?: string | null
    produccionRecurso?: ProduccionRecursoCreateNestedManyWithoutFluidoInput
    produccionEmpresa?: ProduccionEmpresaCreateNestedManyWithoutFluidoInput
    pozos?: PozoRecursoCreateNestedManyWithoutFluidoInput
  }

  export type FluidoUncheckedCreateWithoutProduccionAreaInput = {
    id?: number
    tipoFluido: string
    comentario?: string | null
    produccionRecurso?: ProduccionRecursoUncheckedCreateNestedManyWithoutFluidoInput
    produccionEmpresa?: ProduccionEmpresaUncheckedCreateNestedManyWithoutFluidoInput
    pozos?: PozoRecursoUncheckedCreateNestedManyWithoutFluidoInput
  }

  export type FluidoCreateOrConnectWithoutProduccionAreaInput = {
    where: FluidoWhereUniqueInput
    create: XOR<FluidoCreateWithoutProduccionAreaInput, FluidoUncheckedCreateWithoutProduccionAreaInput>
  }

  export type AreaCreateWithoutProduccionesInput = {
    nombreArea: string
    comentario?: string | null
    cuenca: CuencaCreateNestedOneWithoutAreasInput
    empresa: EmpresaCreateNestedOneWithoutAreasInput
  }

  export type AreaUncheckedCreateWithoutProduccionesInput = {
    id?: number
    nombreArea: string
    cuencaId: number
    empresaId: number
    comentario?: string | null
  }

  export type AreaCreateOrConnectWithoutProduccionesInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutProduccionesInput, AreaUncheckedCreateWithoutProduccionesInput>
  }

  export type FluidoUpsertWithoutProduccionAreaInput = {
    update: XOR<FluidoUpdateWithoutProduccionAreaInput, FluidoUncheckedUpdateWithoutProduccionAreaInput>
    create: XOR<FluidoCreateWithoutProduccionAreaInput, FluidoUncheckedCreateWithoutProduccionAreaInput>
    where?: FluidoWhereInput
  }

  export type FluidoUpdateToOneWithWhereWithoutProduccionAreaInput = {
    where?: FluidoWhereInput
    data: XOR<FluidoUpdateWithoutProduccionAreaInput, FluidoUncheckedUpdateWithoutProduccionAreaInput>
  }

  export type FluidoUpdateWithoutProduccionAreaInput = {
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionRecurso?: ProduccionRecursoUpdateManyWithoutFluidoNestedInput
    produccionEmpresa?: ProduccionEmpresaUpdateManyWithoutFluidoNestedInput
    pozos?: PozoRecursoUpdateManyWithoutFluidoNestedInput
  }

  export type FluidoUncheckedUpdateWithoutProduccionAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoFluido?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    produccionRecurso?: ProduccionRecursoUncheckedUpdateManyWithoutFluidoNestedInput
    produccionEmpresa?: ProduccionEmpresaUncheckedUpdateManyWithoutFluidoNestedInput
    pozos?: PozoRecursoUncheckedUpdateManyWithoutFluidoNestedInput
  }

  export type AreaUpsertWithoutProduccionesInput = {
    update: XOR<AreaUpdateWithoutProduccionesInput, AreaUncheckedUpdateWithoutProduccionesInput>
    create: XOR<AreaCreateWithoutProduccionesInput, AreaUncheckedCreateWithoutProduccionesInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutProduccionesInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutProduccionesInput, AreaUncheckedUpdateWithoutProduccionesInput>
  }

  export type AreaUpdateWithoutProduccionesInput = {
    nombreArea?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    cuenca?: CuencaUpdateOneRequiredWithoutAreasNestedInput
    empresa?: EmpresaUpdateOneRequiredWithoutAreasNestedInput
  }

  export type AreaUncheckedUpdateWithoutProduccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreArea?: StringFieldUpdateOperationsInput | string
    cuencaId?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduccionRecursoCreateWithoutTipoRecursoInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluido: FluidoCreateNestedOneWithoutProduccionRecursoInput
  }

  export type ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
  }

  export type ProduccionRecursoCreateOrConnectWithoutTipoRecursoInput = {
    where: ProduccionRecursoWhereUniqueInput
    create: XOR<ProduccionRecursoCreateWithoutTipoRecursoInput, ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput>
  }

  export type ProduccionRecursoCreateManyTipoRecursoInputEnvelope = {
    data: ProduccionRecursoCreateManyTipoRecursoInput | ProduccionRecursoCreateManyTipoRecursoInput[]
  }

  export type PozoRecursoCreateWithoutTipoRecursoInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluido: FluidoCreateNestedOneWithoutPozosInput
  }

  export type PozoRecursoUncheckedCreateWithoutTipoRecursoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
  }

  export type PozoRecursoCreateOrConnectWithoutTipoRecursoInput = {
    where: PozoRecursoWhereUniqueInput
    create: XOR<PozoRecursoCreateWithoutTipoRecursoInput, PozoRecursoUncheckedCreateWithoutTipoRecursoInput>
  }

  export type PozoRecursoCreateManyTipoRecursoInputEnvelope = {
    data: PozoRecursoCreateManyTipoRecursoInput | PozoRecursoCreateManyTipoRecursoInput[]
  }

  export type ProduccionRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput = {
    where: ProduccionRecursoWhereUniqueInput
    update: XOR<ProduccionRecursoUpdateWithoutTipoRecursoInput, ProduccionRecursoUncheckedUpdateWithoutTipoRecursoInput>
    create: XOR<ProduccionRecursoCreateWithoutTipoRecursoInput, ProduccionRecursoUncheckedCreateWithoutTipoRecursoInput>
  }

  export type ProduccionRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput = {
    where: ProduccionRecursoWhereUniqueInput
    data: XOR<ProduccionRecursoUpdateWithoutTipoRecursoInput, ProduccionRecursoUncheckedUpdateWithoutTipoRecursoInput>
  }

  export type ProduccionRecursoUpdateManyWithWhereWithoutTipoRecursoInput = {
    where: ProduccionRecursoScalarWhereInput
    data: XOR<ProduccionRecursoUpdateManyMutationInput, ProduccionRecursoUncheckedUpdateManyWithoutTipoRecursoInput>
  }

  export type ProduccionRecursoScalarWhereInput = {
    AND?: ProduccionRecursoScalarWhereInput | ProduccionRecursoScalarWhereInput[]
    OR?: ProduccionRecursoScalarWhereInput[]
    NOT?: ProduccionRecursoScalarWhereInput | ProduccionRecursoScalarWhereInput[]
    id?: IntFilter<"ProduccionRecurso"> | number
    cantidad?: IntFilter<"ProduccionRecurso"> | number
    mes?: IntNullableFilter<"ProduccionRecurso"> | number | null
    anio?: IntFilter<"ProduccionRecurso"> | number
    observaciones?: StringNullableFilter<"ProduccionRecurso"> | string | null
    fluidoId?: IntFilter<"ProduccionRecurso"> | number
    tipoRecursoId?: IntFilter<"ProduccionRecurso"> | number
  }

  export type PozoRecursoUpsertWithWhereUniqueWithoutTipoRecursoInput = {
    where: PozoRecursoWhereUniqueInput
    update: XOR<PozoRecursoUpdateWithoutTipoRecursoInput, PozoRecursoUncheckedUpdateWithoutTipoRecursoInput>
    create: XOR<PozoRecursoCreateWithoutTipoRecursoInput, PozoRecursoUncheckedCreateWithoutTipoRecursoInput>
  }

  export type PozoRecursoUpdateWithWhereUniqueWithoutTipoRecursoInput = {
    where: PozoRecursoWhereUniqueInput
    data: XOR<PozoRecursoUpdateWithoutTipoRecursoInput, PozoRecursoUncheckedUpdateWithoutTipoRecursoInput>
  }

  export type PozoRecursoUpdateManyWithWhereWithoutTipoRecursoInput = {
    where: PozoRecursoScalarWhereInput
    data: XOR<PozoRecursoUpdateManyMutationInput, PozoRecursoUncheckedUpdateManyWithoutTipoRecursoInput>
  }

  export type PozoRecursoScalarWhereInput = {
    AND?: PozoRecursoScalarWhereInput | PozoRecursoScalarWhereInput[]
    OR?: PozoRecursoScalarWhereInput[]
    NOT?: PozoRecursoScalarWhereInput | PozoRecursoScalarWhereInput[]
    id?: IntFilter<"PozoRecurso"> | number
    cantidad?: IntFilter<"PozoRecurso"> | number
    mes?: IntNullableFilter<"PozoRecurso"> | number | null
    anio?: IntFilter<"PozoRecurso"> | number
    observaciones?: StringNullableFilter<"PozoRecurso"> | string | null
    tipoRecursoId?: IntFilter<"PozoRecurso"> | number
    fluidoId?: IntFilter<"PozoRecurso"> | number
  }

  export type ProduccionRecursoCreateWithoutFluidoInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecurso: TipoRecursoCreateNestedOneWithoutProduccionInput
  }

  export type ProduccionRecursoUncheckedCreateWithoutFluidoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecursoId: number
  }

  export type ProduccionRecursoCreateOrConnectWithoutFluidoInput = {
    where: ProduccionRecursoWhereUniqueInput
    create: XOR<ProduccionRecursoCreateWithoutFluidoInput, ProduccionRecursoUncheckedCreateWithoutFluidoInput>
  }

  export type ProduccionRecursoCreateManyFluidoInputEnvelope = {
    data: ProduccionRecursoCreateManyFluidoInput | ProduccionRecursoCreateManyFluidoInput[]
  }

  export type ProduccionAreaCreateWithoutFluidoInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    area: AreaCreateNestedOneWithoutProduccionesInput
  }

  export type ProduccionAreaUncheckedCreateWithoutFluidoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    areaId: number
  }

  export type ProduccionAreaCreateOrConnectWithoutFluidoInput = {
    where: ProduccionAreaWhereUniqueInput
    create: XOR<ProduccionAreaCreateWithoutFluidoInput, ProduccionAreaUncheckedCreateWithoutFluidoInput>
  }

  export type ProduccionAreaCreateManyFluidoInputEnvelope = {
    data: ProduccionAreaCreateManyFluidoInput | ProduccionAreaCreateManyFluidoInput[]
  }

  export type ProduccionEmpresaCreateWithoutFluidoInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    empresa: EmpresaCreateNestedOneWithoutProduccionesInput
  }

  export type ProduccionEmpresaUncheckedCreateWithoutFluidoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    empresaId: number
  }

  export type ProduccionEmpresaCreateOrConnectWithoutFluidoInput = {
    where: ProduccionEmpresaWhereUniqueInput
    create: XOR<ProduccionEmpresaCreateWithoutFluidoInput, ProduccionEmpresaUncheckedCreateWithoutFluidoInput>
  }

  export type ProduccionEmpresaCreateManyFluidoInputEnvelope = {
    data: ProduccionEmpresaCreateManyFluidoInput | ProduccionEmpresaCreateManyFluidoInput[]
  }

  export type PozoRecursoCreateWithoutFluidoInput = {
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecurso: TipoRecursoCreateNestedOneWithoutPozosInput
  }

  export type PozoRecursoUncheckedCreateWithoutFluidoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecursoId: number
  }

  export type PozoRecursoCreateOrConnectWithoutFluidoInput = {
    where: PozoRecursoWhereUniqueInput
    create: XOR<PozoRecursoCreateWithoutFluidoInput, PozoRecursoUncheckedCreateWithoutFluidoInput>
  }

  export type PozoRecursoCreateManyFluidoInputEnvelope = {
    data: PozoRecursoCreateManyFluidoInput | PozoRecursoCreateManyFluidoInput[]
  }

  export type ProduccionRecursoUpsertWithWhereUniqueWithoutFluidoInput = {
    where: ProduccionRecursoWhereUniqueInput
    update: XOR<ProduccionRecursoUpdateWithoutFluidoInput, ProduccionRecursoUncheckedUpdateWithoutFluidoInput>
    create: XOR<ProduccionRecursoCreateWithoutFluidoInput, ProduccionRecursoUncheckedCreateWithoutFluidoInput>
  }

  export type ProduccionRecursoUpdateWithWhereUniqueWithoutFluidoInput = {
    where: ProduccionRecursoWhereUniqueInput
    data: XOR<ProduccionRecursoUpdateWithoutFluidoInput, ProduccionRecursoUncheckedUpdateWithoutFluidoInput>
  }

  export type ProduccionRecursoUpdateManyWithWhereWithoutFluidoInput = {
    where: ProduccionRecursoScalarWhereInput
    data: XOR<ProduccionRecursoUpdateManyMutationInput, ProduccionRecursoUncheckedUpdateManyWithoutFluidoInput>
  }

  export type ProduccionAreaUpsertWithWhereUniqueWithoutFluidoInput = {
    where: ProduccionAreaWhereUniqueInput
    update: XOR<ProduccionAreaUpdateWithoutFluidoInput, ProduccionAreaUncheckedUpdateWithoutFluidoInput>
    create: XOR<ProduccionAreaCreateWithoutFluidoInput, ProduccionAreaUncheckedCreateWithoutFluidoInput>
  }

  export type ProduccionAreaUpdateWithWhereUniqueWithoutFluidoInput = {
    where: ProduccionAreaWhereUniqueInput
    data: XOR<ProduccionAreaUpdateWithoutFluidoInput, ProduccionAreaUncheckedUpdateWithoutFluidoInput>
  }

  export type ProduccionAreaUpdateManyWithWhereWithoutFluidoInput = {
    where: ProduccionAreaScalarWhereInput
    data: XOR<ProduccionAreaUpdateManyMutationInput, ProduccionAreaUncheckedUpdateManyWithoutFluidoInput>
  }

  export type ProduccionEmpresaUpsertWithWhereUniqueWithoutFluidoInput = {
    where: ProduccionEmpresaWhereUniqueInput
    update: XOR<ProduccionEmpresaUpdateWithoutFluidoInput, ProduccionEmpresaUncheckedUpdateWithoutFluidoInput>
    create: XOR<ProduccionEmpresaCreateWithoutFluidoInput, ProduccionEmpresaUncheckedCreateWithoutFluidoInput>
  }

  export type ProduccionEmpresaUpdateWithWhereUniqueWithoutFluidoInput = {
    where: ProduccionEmpresaWhereUniqueInput
    data: XOR<ProduccionEmpresaUpdateWithoutFluidoInput, ProduccionEmpresaUncheckedUpdateWithoutFluidoInput>
  }

  export type ProduccionEmpresaUpdateManyWithWhereWithoutFluidoInput = {
    where: ProduccionEmpresaScalarWhereInput
    data: XOR<ProduccionEmpresaUpdateManyMutationInput, ProduccionEmpresaUncheckedUpdateManyWithoutFluidoInput>
  }

  export type PozoRecursoUpsertWithWhereUniqueWithoutFluidoInput = {
    where: PozoRecursoWhereUniqueInput
    update: XOR<PozoRecursoUpdateWithoutFluidoInput, PozoRecursoUncheckedUpdateWithoutFluidoInput>
    create: XOR<PozoRecursoCreateWithoutFluidoInput, PozoRecursoUncheckedCreateWithoutFluidoInput>
  }

  export type PozoRecursoUpdateWithWhereUniqueWithoutFluidoInput = {
    where: PozoRecursoWhereUniqueInput
    data: XOR<PozoRecursoUpdateWithoutFluidoInput, PozoRecursoUncheckedUpdateWithoutFluidoInput>
  }

  export type PozoRecursoUpdateManyWithWhereWithoutFluidoInput = {
    where: PozoRecursoScalarWhereInput
    data: XOR<PozoRecursoUpdateManyMutationInput, PozoRecursoUncheckedUpdateManyWithoutFluidoInput>
  }

  export type AreaCreateManyEmpresaInput = {
    id?: number
    nombreArea: string
    cuencaId: number
    comentario?: string | null
  }

  export type ProduccionEmpresaCreateManyEmpresaInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
  }

  export type AreaUpdateWithoutEmpresaInput = {
    nombreArea?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    cuenca?: CuencaUpdateOneRequiredWithoutAreasNestedInput
    producciones?: ProduccionAreaUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreArea?: StringFieldUpdateOperationsInput | string
    cuencaId?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    producciones?: ProduccionAreaUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreArea?: StringFieldUpdateOperationsInput | string
    cuencaId?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduccionEmpresaUpdateWithoutEmpresaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluido?: FluidoUpdateOneRequiredWithoutProduccionEmpresaNestedInput
  }

  export type ProduccionEmpresaUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionEmpresaUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionAreaCreateManyAreaInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
  }

  export type ProduccionAreaUpdateWithoutAreaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluido?: FluidoUpdateOneRequiredWithoutProduccionAreaNestedInput
  }

  export type ProduccionAreaUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionAreaUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaCreateManyCuencaInput = {
    id?: number
    nombreArea: string
    empresaId: number
    comentario?: string | null
  }

  export type AreaUpdateWithoutCuencaInput = {
    nombreArea?: StringFieldUpdateOperationsInput | string
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutAreasNestedInput
    producciones?: ProduccionAreaUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutCuencaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreArea?: StringFieldUpdateOperationsInput | string
    empresaId?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    producciones?: ProduccionAreaUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutCuencaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreArea?: StringFieldUpdateOperationsInput | string
    empresaId?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PozoSistemaCreateManySistemaInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
  }

  export type PozoSistemaUpdateWithoutSistemaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PozoSistemaUncheckedUpdateWithoutSistemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PozoSistemaUncheckedUpdateManyWithoutSistemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduccionRecursoCreateManyTipoRecursoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
  }

  export type PozoRecursoCreateManyTipoRecursoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    fluidoId: number
  }

  export type ProduccionRecursoUpdateWithoutTipoRecursoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluido?: FluidoUpdateOneRequiredWithoutProduccionRecursoNestedInput
  }

  export type ProduccionRecursoUncheckedUpdateWithoutTipoRecursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionRecursoUncheckedUpdateManyWithoutTipoRecursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PozoRecursoUpdateWithoutTipoRecursoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluido?: FluidoUpdateOneRequiredWithoutPozosNestedInput
  }

  export type PozoRecursoUncheckedUpdateWithoutTipoRecursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PozoRecursoUncheckedUpdateManyWithoutTipoRecursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    fluidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionRecursoCreateManyFluidoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecursoId: number
  }

  export type ProduccionAreaCreateManyFluidoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    areaId: number
  }

  export type ProduccionEmpresaCreateManyFluidoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    empresaId: number
  }

  export type PozoRecursoCreateManyFluidoInput = {
    id?: number
    cantidad: number
    mes?: number | null
    anio: number
    observaciones?: string | null
    tipoRecursoId: number
  }

  export type ProduccionRecursoUpdateWithoutFluidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecurso?: TipoRecursoUpdateOneRequiredWithoutProduccionNestedInput
  }

  export type ProduccionRecursoUncheckedUpdateWithoutFluidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecursoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionRecursoUncheckedUpdateManyWithoutFluidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecursoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionAreaUpdateWithoutFluidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    area?: AreaUpdateOneRequiredWithoutProduccionesNestedInput
  }

  export type ProduccionAreaUncheckedUpdateWithoutFluidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionAreaUncheckedUpdateManyWithoutFluidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionEmpresaUpdateWithoutFluidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutProduccionesNestedInput
  }

  export type ProduccionEmpresaUncheckedUpdateWithoutFluidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProduccionEmpresaUncheckedUpdateManyWithoutFluidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: IntFieldUpdateOperationsInput | number
  }

  export type PozoRecursoUpdateWithoutFluidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecurso?: TipoRecursoUpdateOneRequiredWithoutPozosNestedInput
  }

  export type PozoRecursoUncheckedUpdateWithoutFluidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecursoId?: IntFieldUpdateOperationsInput | number
  }

  export type PozoRecursoUncheckedUpdateManyWithoutFluidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    mes?: NullableIntFieldUpdateOperationsInput | number | null
    anio?: IntFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    tipoRecursoId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EmpresaCountOutputTypeDefaultArgs instead
     */
    export type EmpresaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpresaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AreaCountOutputTypeDefaultArgs instead
     */
    export type AreaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuencaCountOutputTypeDefaultArgs instead
     */
    export type CuencaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuencaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SistemaCountOutputTypeDefaultArgs instead
     */
    export type SistemaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SistemaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoRecursoCountOutputTypeDefaultArgs instead
     */
    export type TipoRecursoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoRecursoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FluidoCountOutputTypeDefaultArgs instead
     */
    export type FluidoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FluidoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmpresaDefaultArgs instead
     */
    export type EmpresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpresaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AreaDefaultArgs instead
     */
    export type AreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuencaDefaultArgs instead
     */
    export type CuencaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuencaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PozoRecursoDefaultArgs instead
     */
    export type PozoRecursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PozoRecursoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SistemaDefaultArgs instead
     */
    export type SistemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SistemaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PozoSistemaDefaultArgs instead
     */
    export type PozoSistemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PozoSistemaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProduccionEmpresaDefaultArgs instead
     */
    export type ProduccionEmpresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProduccionEmpresaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProduccionRecursoDefaultArgs instead
     */
    export type ProduccionRecursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProduccionRecursoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProduccionAreaDefaultArgs instead
     */
    export type ProduccionAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProduccionAreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoRecursoDefaultArgs instead
     */
    export type TipoRecursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoRecursoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FluidoDefaultArgs instead
     */
    export type FluidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FluidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoticiasDefaultArgs instead
     */
    export type NoticiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoticiasDefaultArgs<ExtArgs>

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