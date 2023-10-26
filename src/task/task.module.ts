import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { PrismaMudule } from "src/prisma/prisma.module";

@Module({
    controllers:[TaskController],
    providers:[TaskService],
    imports:[PrismaMudule]
})
export class TaskModule {}