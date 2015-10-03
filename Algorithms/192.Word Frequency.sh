# Read from the file words.txt and output the word frequency list to stdout.
awk '{
    for(i=1;i<=NF;i++){
        if(c[$i]){
            c[$i]++;
        }else{
            c[$i]=1;
        }
    }
}
END {
    for(k in c){
        print c[k],k;
    }
}' words.txt | sort -rn | awk '{print $2" "$1}'

# Read from the file words.txt and output the word frequency list to stdout.
cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -rn | awk '{print $2" "$1}'