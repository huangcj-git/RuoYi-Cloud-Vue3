<template>
    <div class="app-container">
        <el-button @click="pull">测试</el-button>
    </div>
</template>


<script setup name="DataCollector">
import {pullFile} from "@/api/okx/okx";

function pull(row) {
    return pullFile();
}
</script>

<style scoped>

</style>
