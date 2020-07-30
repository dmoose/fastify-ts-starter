import convict from 'convict'

declare module 'fastify' {
  export interface FastifyInstance {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    convict: convict.Config<any>
  }
}

/*
import { PrismaClient, PrismaClientOptions } from "@prisma/client"
import { IncomingMessage, Server, ServerResponse } from "http"
import { Options as TokenOptions } from "csrf"
import * as fastify from "fastify"
import * as http from "http"

declare module "fastify" {
  export interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
    > {
    db: PrismaClient<PrismaClientOptions, never>
  }
}

declare module "fastify" {
  interface FastifyRequest {
    csrfToken(): string
  }
}

interface Options<HttpRequest> extends TokenOptions {
  value?: (req: HttpRequest) => string
  cookie?: fastify.CookieSerializeOptions | boolean
  ignoreMethods?: Array<string>
  sessionKey?: string
}

declare const fastifyCsrf: fastify.Plugin<
  Server,
  IncomingMessage,
  ServerResponse,
  Options<ServerResponse>
>

export = fastifyCsrf

import { Server, IncomingMessage, ServerResponse } from 'http';
import { Http2SecureServer, Http2Server, Http2ServerRequest, Http2ServerResponse } from 'http2';
import * as https from 'https';

type HttpServer = Server | Http2Server | Http2SecureServer | https.Server;
type HttpRequest = IncomingMessage | Http2ServerRequest;
type HttpResponse = ServerResponse | Http2ServerResponse;

declare module 'fastify' {

  export interface FastifyInstance {
    db: any;
  }

  export interface FastifyReply<HttpResponse> {
  }

  export interface FastifyRequest<HttpRequest> {
    user: { name: string, id: string };
  }
}

*/
