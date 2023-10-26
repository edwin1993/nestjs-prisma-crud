import { Controller, Get, Post, Delete, Put, Body, Param } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "@prisma/client";

@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService){}


    @Get()
    getAllTasks(){
        return this.taskService.getAllTask()
    }

    @Post()
    async createtask(@Body() data: Task){
        return this.taskService.createTask(data)
    }

    @Get('id')
    async getTaskById(@Param('id') id: string){
        return this.taskService.getTaskById(Number(id))
    }

    @Delete('id')
    async deleteTask(@Param('id') id: string){
        return this.taskService.deleteTask(Number(id))
    }

    @Put()
    updateTask(@Param('id') id: string, @Body() data: Task){
        return this.taskService.updateTask(Number(id), data)
    }
}