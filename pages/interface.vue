<template>
        
    <div>
        <div class="grid grid-rows-4 grid-cols-5 grid-flow-row-dense gap-4">
            <FontCard>
                <FormatCard :font="fonts[0]"/>
                <FormatCard :font="fonts[1]"/>
            </FontCard>
            <FontCard>
                <FormatCard :font="fonts[0]"/>
                <FormatCard :font="fonts[1]"/>
            </FontCard>
            <FontCard>
                <FormatCard :font="fonts[0]"/>
                <FormatCard :font="fonts[1]"/>
            </FontCard>
            <FontCard>
                <FormatCard :font="fonts[0]"/>
                <FormatCard :font="fonts[1]"/>
            </FontCard>
        </div>
        <div class="w-full bg-red-400">Unverteilt</div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            fonts: [
            {
                tag: '.typo-100',
                prefix: null,
                classes: [] 
            },
            {
                tag: '.typo-200',
                prefix: null,
                classes: [] 
            },
            {
                tag: '.typo-300',
                prefix: null,
                classes: [] 
            }
        
            ]
        }
    },
}
</script>